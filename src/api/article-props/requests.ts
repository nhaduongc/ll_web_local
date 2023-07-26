import { directusClient } from 'src/api/directus/client';

import { BlogEndpoints } from './constants';
import { ArticleDtoToHeadProps, ArticleDtoToArticleProps } from './DtoToProps';

export const getArticleData = async (slug: string) => {
    const endpoint = BlogEndpoints.getArticle.replace('{slug}', slug);

    const { data: response } = await directusClient.get(endpoint);

    if (response.data.length === 0) {
        throw new Error('ARTICLE_NOT_FOUND');
    }

    return {
        head: ArticleDtoToHeadProps(response.data[0]),
        article: ArticleDtoToArticleProps(response.data[0]),
    };
};
