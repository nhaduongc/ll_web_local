import { Image } from './image';

export interface ImageLink {
    id: number;
    url: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
    ref?: 'nofollow' | 'noopener' | 'noreferrer' | 'external';
    image: Image;
}
