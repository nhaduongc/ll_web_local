import { Html, Head, Main, NextScript } from 'next/document';

import { FacebookPixel } from '../components/facebook-pixel';

const Document = () => (
    <Html>
        <Head>
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
            <link rel="manifest" href="/favicon/site.webmanifest" />
            <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#a2d929" />
            <meta name="msapplication-TileColor" content="#08122c" />
            <meta name="theme-color" content="#08122c" />
            <link rel="stylesheet" href="https://use.typekit.net/hyi3ttn.css" />

            <meta property="og:url" content="https://litterlotto.com" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="LitterLotto" />
            <meta property="og:description" content="" />
            <meta property="og:image" content="" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@LitterLotto" />
            <meta name="twitter:author" content="@LitterLotto" />
            <meta name="twitter:image" content="" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
                href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@600&display=swap"
                rel="stylesheet"
            />
            <FacebookPixel />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
);

export default Document;
