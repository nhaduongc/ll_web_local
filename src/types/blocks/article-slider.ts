import { Article } from '../article';
import { Image } from '../image';

export interface ArticleSliderBlock {
    id: number;
    hashAnchor: string | null;
    type: 'article-slider';
    title: string;
    articles: Article[];
    background: Image;
    textColour: string;
}
