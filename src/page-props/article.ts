import { GetServerSideProps } from 'next';

import { getSlugFromSlugProp } from 'src/utils/get-slug-from-slug-prop';
import { ArticleProps } from 'src/types/page-props/article';

import { getArticleData } from '../api/article-props/requests';

import { footer } from './global/footer';
import { header } from './global/header';

export const getArticleServerSideProps: GetServerSideProps<ArticleProps> = async (context) => {
    try {
        const slug = getSlugFromSlugProp(context.params?.slug);

        const { head, article } = await getArticleData(slug);

        return {
            props: {
                head,
                header: await header(),
                article,
                footer: await footer(),
            },
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
};
