import { GetServerSideProps } from 'next';

import { PageProps } from 'src/types/page-props/page';

import { getPageFromSlugProp } from '../utils/get-page-from-slug-prop';
import { getPageData } from '../api/page-props/requests';

import { footer } from './global/footer';
import { header } from './global/header';

export const getPageServerSideProps: GetServerSideProps<PageProps> = async (context) => {
    try {
        const page = getPageFromSlugProp(context.params?.slug);

        const { head, blocks } = await getPageData(page);

        return {
            props: {
                head,
                header: await header(),
                blocks,
                footer: await footer(),
            },
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
};
