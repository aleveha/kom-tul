const em = value => value / 16 + "em";
const rem = value => value / 16 + "rem";

/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ["./src/**/*.{ts,tsx}"],
	theme: {
		fontFamily: {
			"tul-mono":
				"tul-mono-custom, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
			base: "inter-custom, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
		},
		screens: {
			sm: em(576),
			md: em(768),
			lg: em(992),
			xl: em(1280),
			xxl: em(1440),
		},
		container: {
			sm: "none",
			md: rem(688),
			lg: rem(912),
			xl: rem(1120),
			xxl: rem(1216),
		},
		colors: {
			tulViolet: "#5948AD",
			tulVioletDark: "#251E48",
			gray500: "#888B95",
			gray200: "#C9CACF",
			gray100: "#E4E5E7",
			white: "#FFFFFF",
		},
		fontSize: {
			hero: [rem(72)],
			h1: [rem(32)],
			h2: [rem(28)],
			h3: [rem(24)],
			large: [rem(20)],
			body: [rem(18)],
			small: [rem(12)],
		},
	},
	plugins: [],
};
