/** @type {import('tailwindcss').Config} */
const { lighten, darken } = require('polished');

module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            xs: '420px',
            // => @media (min-width: 640px) { ... }

            sm: '640px',
            // => @media (min-width: 640px) { ... }

            md: '768px',
            // => @media (min-width: 768px) { ... }

            smd: '900px',
            // => @media (min-width: 768px) { ... }

            lg: '1024px',
            // => @media (min-width: 1024px) { ... }

            xl: '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
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
        extend: {
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
                transparent: 'transparent',
            },
            fontFamily: {
                inconsolata: ['inconsolata', 'sans-serif'],
                sans: ['azo-sans-web', 'sans-serif'],
            },
            fontSize: {
                'label-small': [
                    '13px',
                    {
                        lineHeight: '16px',
                    },
                ],
                label: '14px',
                'label-large': [
                    '15px',
                    {
                        lineHeight: '20px',
                    },
                ],
                'body-small': '16px',
                body: [
                    '25px',
                    {
                        lineHeight: '30px',
                    },
                ],
                'body-large': [
                    '30px',
                    {
                        lineHeight: '35px',
                    },
                ],
                'body-lead': [
                    '38px',
                    {
                        lineHeight: '55px',
                    },
                ],
                'header-small': '50px',
                'header-medium': '56px',
                'header-large': ['72px', '70px'],
                'header-xlarge': ['92px', '81px'],
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                'marquee-reverse': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(50%)' },
                },
            },
            animation: {
                marquee: 'marquee linear infinite',
                'marquee-reverse': 'marquee-reverse linear infinite',
            },
        },
    },
    plugins: [],
};
