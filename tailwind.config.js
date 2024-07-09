/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: () => ({
			center: true,
			padding: {
				default: "1rem",
				xl: "3.5rem",
				lg: "1.75rem",
				sm: "1.25rem",
				"2rem": "4rem",
			},
		}),
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},

			// #FF90BC pink

			// #A3D8FF babyblue

			//  #00008b  blue

			colors: {
				primary: {
					500: "#e72254",
					// 500:"#FF90BC"
				},
				secondary: {
					500: "#203240",
					// 500:"#00008b"
				},
				white: {
					300: "#f2f4f9",
					400: "#f2f4f9",
					500: "#fff",
				},
				overlay: {
					400: "#203240",
				},
				babyBlue: "#A3D8FF",

				padding: {},
			},
		},
	},
	plugins: [],
};
