import { Article } from '../../types/article';
import concatString from '../../utils/concat-string';
import { ArticlesMeta } from '../../types/page-props/blog';
import { ARTICLE_TITLE_LENGTH, ARTICLE_SHORT_DESCRIPTION_LENGTH } from '../../constants/blog';
import { BlogCategory } from '../../types/blog-category';
import { noImage } from '../../constants/no-image';

export const BlogDtoToArticlesProp = (data: any[]): Article[] =>
    data.map((article: any) => ({
        id: article.id,
        url: `${process.env.SITE_URL}/article/${article.Slug}`,
        dateCreated: article.Date,
        ...(article.Image
            ? {
                  image: {
                      id: article.Image.id,
                      url: `${process.env.DIRECTUS_BASE_URL}/assets/${article.Image.id}`,
                      alt: article.Image.title,
                  },
              }
            : { image: noImage }),
        title: concatString(article.Title ?? '', ARTICLE_TITLE_LENGTH),
        shortDescription: concatString(
            article.Short_Description ?? '',
            ARTICLE_SHORT_DESCRIPTION_LENGTH
        ),
        categories: article.Categories.map((category: any) => ({
            id: category.Blog_Category_id.id,
            url: `${process.env.SITE_URL}/articles/category/${category.Blog_Category_id.Slug}`,
            name: category.Blog_Category_id.Name,
        })),
    }));

export const BlogDtoToMetaProp = (
    meta: any,
    perPage: number,
    activePage: number
): ArticlesMeta => ({
    total: meta.filter_count,
    perPage,
    activePage,
});

export const BlogCategoriesDtoToCategoriesProp = (data: any[]): BlogCategory[] =>
    data.map((category) => ({
        id: category.id,
        url: `${process.env.SITE_URL}/articles/category/${category.Slug}`,
        name: category.Name,
    }));
