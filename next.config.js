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
				source: "/en/employees",
				destination: "/en/pracovnici",
			},
			{
				source: "/en/laboratories",
				destination: "/en/laboratore",
			},
			{
				source: "/en/laboratories/laboratory-of-chip-technologies",
				destination: "/en/laboratore/laborator-triskovych-technologii-a-procesu",
			},
			{
				source: "/en/laboratories/laboratory-of-engineering-metrology",
				destination: "/en/laboratore/laborator-strojirenske-metrologie",
			},
			{
				source: "/projects",
				destination: "/projekty",
			},
			{
				source: "/cooperation",
				destination: "/spoluprace",
			},
			{
				source: "/employees",
				destination: "/pracovnici",
			},
			{
				source: "/laboratories",
				destination: "/laboratore",
			},
			{
				source: "/laboratories/laboratory-of-chip-technologies",
				destination: "/laboratore/laborator-triskovych-technologii-a-procesu",
			},
			{
				source: "/laboratories/laboratory-of-engineering-metrology",
				destination: "/laboratore/laborator-strojirenske-metrologie",
			},
		];
	},
};

module.exports = nextConfig;
