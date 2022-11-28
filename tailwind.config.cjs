/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const { lighten, darken } = require('polished')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		fontSize: {
			'body-small': '16px',
			"body": ["25px", {
				lineHeight: '30px',
			}],
			"body-large": ["30px", {
				lineHeight: '35px',
			}],
			"body-lead": ["38px", {
				lineHeight: '55px',
			}],
			'header-small': '50px',
			'header-medium': '56px',
			'header-large': ['72px', '70px'],
			'header-xlarge': ['92px', '81px'],
		},
		colors: {
			green: {
				light: lighten(0.1, '#A2D929'),
				DEFAULT: '#A2D929',
				dark: darken(0.1, '#A2D929'),
			},
			navy: {
				light: lighten(0.1, '#08122C'),
				DEFAULT: '#08122C',
				dark: darken(0.1, '#08122C'),
			},
			grey: {
				light: lighten(0.1, '#DFE4E9'),
				DEFAULT: '#DFE4E9',
				dark: darken(0.1, '#DFE4E9'),
			},
			red: '#DB162F',
			blue: '#3A86FF',
			yellow: {
				light: lighten(0.1, '#FFD300'),
				DEFAULT: '#FFD300',
				dark: '#DDBB11',
			},
			pink: '#FF006E',
			purple: '#5E239D',
			white: '#FFFFFF',
			black: '#00321F',
			transparent: 'transparent'
		},
		extend: {
			fontFamily: {
				inconsolata: ['Inconsolata', 'sans-serif'],
				sans: ['azo-sans-web', ...defaultTheme.fontFamily.sans]
			},
			minWidth: {
				'button': '140px',
			},
			container: {
				screens: {
					sm: '640px',
					md: '768px',
					lg: '1024px',
					xl: '1240px',
					'2xl': '1240px',
				},
			},
			typography: (theme) => ({
				base: {
					css: {
						fontSize: theme('fontSize.body'),
						lineHeight: '30px',
						fontWeight: '500',

					},
				},
				lg: {
					css: {
						fontSize: theme('fontSize.body-large'),
						lineHeight: '35px',
					}
				},
				xl: {
					css: {
						fontSize: theme('fontSize.body-lead'),
						lineHeight: '47px',
						letterSpacing: '-0.03em',
					}
				},
				white: {
					css: {
						'--tw-prose-body': 'colors.white',
						'--tw-prose-headings': '#ffffff',
						'--tw-prose-lead': '#ffffff',
						'--tw-prose-links': '#ffffff',
						'--tw-prose-bold': '#ffffff',
						'--tw-prose-counters': '#ffffff',
						'--tw-prose-bullets': '#ffffff',
						'--tw-prose-hr': '#ffffff',
						'--tw-prose-quotes': '#ffffff',
						'--tw-prose-quote-borders': '#ffffff',
						'--tw-prose-captions': '#ffffff',
						'--tw-prose-code': '#ffffff',
						'--tw-prose-pre-code': '#ffffff',
					}
				}
			}),
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' },
				},
				'marquee-reverse': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(50%)' },
				}
			},
			animation: {
				marquee: 'marquee linear infinite',
				'marquee-reverse': 'marquee-reverse linear infinite',
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
	safelist: [
		'h-10',
		'w-8',
		'w-10',
		'transition-all',
		'my-0.5',
		'my-[3px]',
		'scale-75',
		'md:scale-100',
	]
}
