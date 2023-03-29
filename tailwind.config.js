/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		// './src/**/*.{js,ts,jsx,tsx}',
	],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#e27677',

					secondary: '#84f484',

					accent: '#15c69d',

					neutral: '#342334',

					'base-100': '#F3F0F5',

					info: '#265CD9',

					success: '#6BDBAB',

					warning: '#F6AE28',

					error: '#E25546',
				},
			},
		],
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
