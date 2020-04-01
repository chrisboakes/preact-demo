const fetch = require('isomorphic-fetch');

module.exports = function getData() {
	return fetch('https://my-json-server.typicode.com/chrisboakes/preact-demo/news-articles')
	.then(res => res.json());
}
