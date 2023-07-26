import { Image } from '../image';

export interface HeroBlock {
    id: number;
    hashAnchor: string | null;
    type: 'hero';
    heading: string;
    text: string;
    background: Image;
    textColour: string;
}
