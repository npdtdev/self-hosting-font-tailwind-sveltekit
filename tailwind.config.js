const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Oxanium Variable', ...defaultTheme.fontFamily.sans],
				aleo: ['Aleo', ...defaultTheme.fontFamily.sans],
				chillax: ['Chillax']
			}
		}
	},
	plugins: []
};
