/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "var(--primary)",
				textdark: "var(--text-dark)",
				lightbg: "var(--light-bg)",
			},
			fontFamily: {
				montserrat: ["var(--font-montserrat)", "sans-serif"],
			},
			height: {
				933: "933px",
			},
			width: {
				643: "643px",
			},
			borderRadius: {
				"tr-75": "0 75px 0 0",
				"tl-12": "12px 0 0 0",
				"br-12": "0 0 12px 0",
				"bl-75": "0 0 0 75px",
			},
		},
	},
	plugins: [
		function ({ addUtilities }) {
			const newUtilities = {
				".line-clamp-2": {
					overflow: "hidden",
					display: "-webkit-box",
					"-webkit-box-orient": "vertical",
					"-webkit-line-clamp": "2",
				},
				".sr-only": {
					position: "absolute",
					width: "1px",
					height: "1px",
					padding: "0",
					margin: "-1px",
					overflow: "hidden",
					clip: "rect(0, 0, 0, 0)",
					"white-space": "nowrap",
					border: "0",
				},
			};
			addUtilities(newUtilities);
		},
	],
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	purge: {
		enabled: process.env.NODE_ENV === "production",
		content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
		options: {
			safelist: ["bg-primary", "text-white", "hover:bg-blue-700"],
		},
	},
};
