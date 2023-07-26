import { GetStaticProps } from 'next';

import { StaticProps } from 'src/types/page-props/static';

import { footer } from './global/footer';
import { head } from './global/head';
import { header } from './global/header';

export const getStaticPageProps: GetStaticProps<StaticProps> = async () => ({
    props: {
        head,
        header: await header(),
        footer: await footer(),
    },
});
