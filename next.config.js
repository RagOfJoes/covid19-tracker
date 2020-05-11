// next.config.js
process.env.NODE_END !== 'production' && require('dotenv/config');
const debug = process.env.NODE_ENV !== 'production';

module.exports = {
	assetPrefix: !debug ? '/covid-19-tracker' : '',
	env: {
		PORT: process.env.PORT,
		API_ENDPOINT: process.env.API_ENDPOINT,

		BING_NEWS_SUB_KEY: process.env.BING_NEWS_SUB_KEY,
		BING_NEWS_ENDPOINT: process.env.BING_NEWS_ENDPOINT,
	},
};
