import { directusClient } from 'src/api/directus/client';

import { PER_PAGE } from '../../constants/blog';

import {
    BlogCategoriesDtoToCategoriesProp,
    BlogDtoToArticlesProp,
    BlogDtoToMetaProp,
} from './DtoToProps';
import { BlogEndpoints } from './constants';

export const getBlogData = async (page: number) => {
    const endpoint = BlogEndpoints.GetArticles.replace('{limit}', PER_PAGE.toString()).replace(
        '{offset}',
        (PER_PAGE * (page - 1)).toString()
    );

    const { data: response } = await directusClient.get(endpoint);

    return {
        meta: BlogDtoToMetaProp(response.meta, PER_PAGE, page),
        articles: BlogDtoToArticlesProp(response.data),
    };
};

export const getBlogCategoriesData = async (slug: string) => {
    const endpoint = BlogEndpoints.GetCategories.replace('{slug}', slug);

    const { data: response } = await directusClient.get(endpoint);

    return {
        categories: BlogCategoriesDtoToCategoriesProp(response.data),
    };
};
