import { GetServerSideProps } from 'next';

import { BlogCategoryProps } from 'src/types/page-props/blog-category';
import { getBlogCategorySlugAndPageFromSlugProp } from 'src/utils/get-blog-category-slug-and-page-from-slug-prop';
import {
    getBlogCategoryArticlesData,
    getBlogCategoryData,
} from 'src/api/blog-category-props/requests';
import { getBlogCategoriesData } from 'src/api/blog-props/requests';

import { footer } from './global/footer';
import { header } from './global/header';

export const getBlogCategoryServerSideProps: GetServerSideProps<BlogCategoryProps> = async (
    context
) => {
    try {
        const { slug, page } = getBlogCategorySlugAndPageFromSlugProp(context.params?.slug);

        const { head, category, crumbs } = await getBlogCategoryData(slug, page);

        const { categories } = await getBlogCategoriesData(slug);

        const { articlesMeta, articles } = await getBlogCategoryArticlesData(slug, page);

        const { id, name, url, description } = category;

        return {
            props: {
                head,
                header: await header(),
                crumbs,
                id,
                name,
                description,
                url,
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
