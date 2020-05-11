// This file doesn't go through babel or webpack transformation.
// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

(async () => {
	await app.prepare();
	const server = express();

	server.get(['/', '/latest'], (req, res) => {
		return app.render(req, res, '/latest');
	});

	server.get(['/timeline', '/timeline/:country'], (req, res) => {
		const params = { country: req.params.country || 'US' };

		return app.render(req, res, '/timeline', params);
	});

	server.all('*', (req, res) => handle(req, res));

	server.listen(process.env.PORT, (err) => {
		if (err) throw err;

		if (process.env.NODE_ENV === 'development') console.log(`> React on http://localhost:${process.env.PORT}`);
	});
})();
