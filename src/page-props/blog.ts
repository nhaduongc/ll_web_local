import { GetServerSideProps } from 'next';

import { getBlogPageFromSlugProp } from 'src/utils/get-blog-page-from-slug-prop';
import { BlogProps } from 'src/types/page-props/blog';
import { Breadcrumb } from 'src/types/breadcrumbs';
import { getBlogCategoriesData, getBlogData } from 'src/api/blog-props/requests';

import { HeadProps } from '../types/page-props/head';

import { header } from './global/header';
import { footer } from './global/footer';

export const getBlogServerSideProps: GetServerSideProps<BlogProps> = async (context) => {
    try {
        const page = getBlogPageFromSlugProp(context.params?.slug);

        const { meta: articlesMeta, articles } = await getBlogData(page);

        const { categories } = await getBlogCategoriesData('null');

        const outsidePaginationRange =
            (articlesMeta.activePage - 1) * articlesMeta.perPage > articlesMeta.total;

        if (outsidePaginationRange) {
            throw new Error('OVER_PAGINATED');
        }

        const id = 1;
        const name = 'All Article';
        const url = `${process.env.SITE_URL}/articles`;

        const crumbs: Breadcrumb[] = [
            {
                id: 0,
                href: `${process.env.SITE_URL}/articles`,
                text: 'Articles',
            },
            {
                id: 1,
                href: `${process.env.SITE_URL}/articles`,
                text: 'All',
            },
        ];

        const head: HeadProps = {
            metaTitle: 'Blog | LitterLotto',
            metaDescription: `LitterLotto® is a free to enter Prize Draw, with regular spot prizes and huge jackpots, supported by the brands that want a cleaner environment. To enter, simply use the app to take a picture of litter as you place it in the bin. Each time you submit a new piece of litter it's another chance to win!`,
            canonical: `${process.env.SITE_URL}/articles${page !== 1 ? `/page/${page}` : ''}`,
        };

        return {
            props: {
                head,
                header: await header(),
                id,
                name,
                url,
                crumbs,
                categories,
                articles,
                articlesMeta,
                footer: await footer(),
            },
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
};
