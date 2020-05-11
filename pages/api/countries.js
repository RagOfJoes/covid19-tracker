import fetch from 'isomorphic-unfetch';

export default async (req, res) => {
	// Get data from your database
	const r = await fetch(`${process.env.API_ENDPOINT}/countries`, {
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET',
		},
	});
	const json = await r.json();
	res.status(200).json(json);
	res.end();
};
