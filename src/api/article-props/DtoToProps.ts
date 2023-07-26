import { ArticleWithBody } from 'src/types/article';
import concatString from 'src/utils/concat-string';
import { ARTICLE_SHORT_DESCRIPTION_LENGTH } from 'src/constants/blog';
import { noImage } from 'src/constants/no-image';

import { HeadProps } from '../../types/page-props/head';

export const ArticleDtoToArticleProps = (data: any): ArticleWithBody => ({
    id: data.id,
    url: `${process.env.SITE_URL}/article/${data.Slug}`,
    dateCreated: data.Date,
    ...(data.Image
        ? {
              image: {
                  id: data.Image.id,
                  url: `${process.env.DIRECTUS_BASE_URL}/assets/${data.Image.id}`,
                  alt: data.Image.title,
              },
          }
        : {
              image: noImage,
          }),
    title: data.Title,
    shortDescription: concatString(data.Short_Description ?? '', ARTICLE_SHORT_DESCRIPTION_LENGTH),
    categories: data.Categories.map((category: any) => ({
        id: category.Blog_Category_id.id,
        url: `${process.env.SITE_URL}/articles/category/${category.Blog_Category_id.Slug}`,
        name: category.Blog_Category_id.Name,
    })),
    body: data.Body,
});

export const ArticleDtoToHeadProps = (data: any): HeadProps => ({
    metaTitle: data.Meta_Title,
    metaDescription: data.Meta_Description,
    canonical: `${process.env.SITE_URL}/article/${data.Slug}`,
});
