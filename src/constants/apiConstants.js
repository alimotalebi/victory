export default {
	development: {
		PROTOCOL: 'http',
		HOSTNAME: "192.168.60.14",
		PORT: 8888,
	},
	production: {
		PROTOCOL: 'http',
		HOSTNAME: "victory.com",
		PORT: 8888,
	}
}[process.env.NODE_ENV];