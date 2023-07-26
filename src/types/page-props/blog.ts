import { Article } from '../article';
import { Breadcrumb } from '../breadcrumbs';
import { BlogCategory } from '../blog-category';

import { GeneralProps } from './general';

export interface ArticlesMeta {
    total: number;
    perPage: number;
    activePage: number;
}

export interface BlogProps extends GeneralProps {
    id: number;
    name: string;
    url: string;
    crumbs: Breadcrumb[];
    categories: BlogCategory[];
    articles: Article[];
    articlesMeta: ArticlesMeta;
}
