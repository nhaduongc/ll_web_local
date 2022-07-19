/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		fontSize: {
			'base': '16px',
			'body-small': '18px',
			'body': '20px',
			'body-large': '25px',
			'header-small': '30px',
			'header-medium': '50px',
			'header-large': ['70px', '82px'],
		},
		colors: {
			primary: {
				light: '#E2FFEA',
				DEFAULT: '#02733F',
				dark: '#014B29'
			},
			secondary: {
				DEFAULT: '#0F7E85'
			},
			tertiary: {
				DEFAULT: '#FF8F50'
			},
			white: '#FFFFFF',
			black: '#00321F'
		},
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
			},
			minWidth: {
				'button': '146px',
			},
			container: {
				screens: {
					sm: '640px',
					md: '768px',
					lg: '1024px',
					xl: '1300px',
					'2xl': '1300px',
				},
			}
		},
	},
	plugins: [],
}
