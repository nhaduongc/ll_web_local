/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    poweredByHeader: false,
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: {
                loader: '@svgr/webpack',
                options: {
                    svgoConfig: {
                        plugins: [
                            {
                                name: 'removeViewBox',
                                active: false,
                            },
                        ],
                    },
                },
            },
        });
        config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300,
        };
        config.resolve.alias = {
            ...(config.resolve.alias || {}),
            // Transform all direct `react-native` imports to `react-native-web`
            'react-native$': 'react-native-web',
        };
        return config;
    },
    headers: async () => {
        return [
            {
                source: '/.well-known/:path*',
                headers: [
                    {
                        key: 'Content-Type',
                        value: 'application/json',
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=31536000; includeSubDomains; preload',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                ],
            },
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=31536000; includeSubDomains; preload',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                ],
            },
        ];
    },
    redirects: async () => {
        return [
            {
                source: '/:path*',
                has: [{ type: 'host', value: 'www.litterlotto.com' }],
                destination: 'https://litterlotto.com/:path*',
                permanent: true,
            },
            // {
            //     source: '/:path*',
            //     has: [
            //         {
            //             type: 'header',
            //             key: 'User-Agent',
            //             value: '(.*Android.*)',
            //         },
            //         { type: 'query', key: 'binId', value: '(?<binId>.*)' },
            //     ],
            //     destination: '/bin/:binId?instant=redirected',
            //     // 'https://play.google.com/store/apps/details?id=com.litterlotto.app&launch=true&binId=:binId',
            //     // statusCode: 301, // https://www.seocomponent.com/blog/nextjs-redirect-permanent-cache/
            //     permanent: false,
            // },
        ];
    },
};

module.exports = nextConfig;
