import { Image } from '../image';

export interface ImageBlock {
    id: number;
    hashAnchor: string | null;
    type: 'image';
    image: Image;
    width: number;
    backgroundColour: string;
}
