import fetch from 'isomorphic-unfetch';

export default async (req, res) => {
	const {
		query: { count, offset },
	} = req;
	// Get data from your database
	try {
		const r = await fetch(`${process.env.BING_NEWS_ENDPOINT}&count=${Number(count)}&offset=${Number(offset)}`, {
			headers: {
				'Ocp-Apim-Subscription-Key': process.env.BING_NEWS_SUB_KEY,
			},
		});

		if (!r.ok || r.status !== 200) {
			const err = await r.json();
			res.status(r.status).json({
				error: err.error.message,
			});
			res.end();
			return;
		}
		const json = await r.json();
		res.status(200).json(json);
		res.end();
	} catch (e) {}
};
