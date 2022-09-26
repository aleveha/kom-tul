const { i18n } = require("./next-i18next.config");

/** @type {import("next").NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	i18n,
	async rewrites() {
		return [
			{
				source: "/en/projects",
				destination: "/en/projekty",
			},
			{
				source: "/en/cooperation",
				destination: "/en/spoluprace",
			},
			{
				source: "/projects",
				destination: "/projekty",
			},
			{
				source: "/cooperation",
				destination: "/spoluprace",
			},
		];
	},
};

module.exports = nextConfig;
