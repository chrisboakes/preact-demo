const fetch = require('isomorphic-fetch');

module.exports = function getData(path) {
	return fetch(`https://my-json-server.typicode.com/chrisboakes/preact-demo/${path}`)
	.then(res => res.json());
}
