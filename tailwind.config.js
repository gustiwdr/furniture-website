/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./**/*.html", "./**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#054c73",
				lightbg: "#f2f5ff",
				textdark: "#333333",
				errored: "#ef4444",
			},
			fontFamily: {
				montserrat: ['"Montserrat"', "sans-serif"],
			},
			height: {
				933: "933px",
			},
			width: {
				643: "643px",
			},
			borderRadius: {
				"tl-12": "12px 0 0 0",
				"tr-75": "0 75px 0 0",
				"bl-75": "0 0 0 75px",
				"br-12": "0 0 12px 0",
			},
		},
	},
	plugins: [],
};
