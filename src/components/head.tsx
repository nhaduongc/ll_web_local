import NextHead from 'next/head';
import { FC } from 'react';

import { HeadProps } from 'src/types/page-props/head';

export const Head: FC<{ head: HeadProps }> = ({ head }) => (
    <NextHead>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <title>{head.metaTitle}</title>
        <meta name="description" content={head.metaDescription} />
        <link rel="canonical" href={head.canonical} />
        <meta
                    name="apple-itunes-app"
                    content="app-id=1550451187, app-clip-bundle-id=com.litterlotto.ios.Clip"
                />
    </NextHead>
);
