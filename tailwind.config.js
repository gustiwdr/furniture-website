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
				nunito: ["var(--font-nunito)", "sans-serif"],
				poppins: ["var(--font-poppins)", "sans-serif"],
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
	plugins: [],
};
