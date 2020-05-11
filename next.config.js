// next.config.js
process.env.NODE_END !== 'production' && require('dotenv/config');

module.exports = {
	env: {
		PORT: process.env.PORT,
		API_ENDPOINT: process.env.API_ENDPOINT,

		BING_NEWS_SUB_KEY: process.env.BING_NEWS_SUB_KEY,
		BING_NEWS_ENDPOINT: process.env.BING_NEWS_ENDPOINT,
	},
};
