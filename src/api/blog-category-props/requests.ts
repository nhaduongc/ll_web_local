import { directusClient } from 'src/api/directus/client';

import { PER_PAGE } from '../../constants/blog';
import { BlogDtoToMetaProp } from '../blog-props/DtoToProps';

import {
    BlogCategoryDtoToArticlesProp,
    BlogCategoryDtoToCategoryProp,
    BlogCategoryDtoToCrumbsProp,
    BlogCategoryDtoToHeadProp,
} from './DtoToProps';
import { BlogEndpoints } from './constants';

export const getBlogCategoryData = async (slug: string, page: number) => {
    const endpoint = BlogEndpoints.GetCategory.replace('{slug}', slug);

    const { data: response } = await directusClient.get(endpoint);

    return {
        head: BlogCategoryDtoToHeadProp(response.data[0], page),
        category: BlogCategoryDtoToCategoryProp(response.data[0]),
        crumbs: BlogCategoryDtoToCrumbsProp(response.data[0]),
    };
};

export const getBlogCategoryArticlesData = async (slug: string, page: number) => {
    const endpoint = BlogEndpoints.GetCategoryArticles.replace('{limit}', PER_PAGE.toString())
        .replace('{offset}', (PER_PAGE * (page - 1)).toString())
        .replace('{slug}', slug);

    const { data: response } = await directusClient.get(endpoint);

    return {
        articles: BlogCategoryDtoToArticlesProp(response.data),
        articlesMeta: BlogDtoToMetaProp(response.meta, PER_PAGE, page),
    };
};
