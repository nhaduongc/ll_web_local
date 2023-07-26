import { Image } from './image';
import { BlogCategory } from './blog-category';

export interface Article {
    id: number;
    url: string;
    dateCreated: string | null;
    image: Image;
    title: string;
    shortDescription: string;
    categories: BlogCategory[];
}

export interface ArticleWithBody extends Article {
    body: string;
}
