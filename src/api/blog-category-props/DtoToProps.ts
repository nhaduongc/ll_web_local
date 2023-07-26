import { Article } from '../../types/article';
import concatString from '../../utils/concat-string';
import { ARTICLE_TITLE_LENGTH, ARTICLE_SHORT_DESCRIPTION_LENGTH } from '../../constants/blog';
import { BlogCategoryDetail } from '../../types/blog-category';
import { Breadcrumb } from '../../types/breadcrumbs';
import { noImage } from '../../constants/no-image';
import { HeadProps } from '../../types/page-props/head';

export const BlogCategoryDtoToArticlesProp = (data: any[]): Article[] =>
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

export const BlogCategoryDtoToCategoryProp = (data: any): BlogCategoryDetail => ({
    id: data.id,
    url: `${process.env.SITE_URL}/articles/category/${data.Slug}`,
    name: data.Name,
    description: data.Description,
});

export const BlogCategoryDtoToHeadProp = (data: any, page: number): HeadProps => ({
    metaTitle: `${data.Name} | LitterLotto`,
    metaDescription: data.Description,
    canonical: `${process.env.SITE_URL}/articles/category/${data.Slug}${
        page !== 1 ? `/page/${page}` : ''
    }`,
});

export const BlogCategoryDtoToCrumbsProp = (data: any): Breadcrumb[] => [
    {
        id: 0,
        href: `${process.env.SITE_URL}/articles`,
        text: 'Articles',
    },
    {
        id: data.id,
        href: `${process.env.SITE_URL}/articles/category/${data.Slug}`,
        text: data.Name,
    },
];
