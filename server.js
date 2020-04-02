const sirv = require("sirv");
const polka = require("polka");
const { h } = require("preact");
const { basename } = require("path");
const { readFileSync } = require("fs");
const render = require("preact-render-to-string");
const bundle = require("./build/ssr-build/ssr-bundle");
const data = require('./src/data');

const App = bundle.default;
const { PORT = 3000 } = process.env;

// TODO: improve this?
const RGX = /<div id="app"[^>]*>.*?(?=<script)/i;
const template = readFileSync("build/index.html", "utf8");

function setHeaders(res, file) {
	let cache =
	basename(file) === "sw.js"
		? "private,no-cache"
		: "public,max-age=31536000,immutable";
	res.setHeader("Cache-Control", cache); // don't cache service worker file
}

polka()
	.use(sirv("build", { setHeaders }))
	.get("/politics", (req, res) => {
		data('politics-articles').then(content => {
			const body = render(h(App, { url: req.url, content: content }));
			const bodyApp = template.replace(RGX, body);
			const bodyContent = bodyApp.replace('/** ::CONTENT:: **/', JSON.stringify(content));
			res.setHeader("Content-Type", "text/html");
			res.end(bodyContent);
		});
	})
	.get("*", (req, res) => {
		let body = render(h(App, { url: req.url, content: null }));
		res.setHeader("Content-Type", "text/html");
		res.end(template.replace(RGX, body));
	})
	.listen(PORT, err => {
		if (err) throw err;
		console.log(`> Running on localhost:${PORT}`);
	});
