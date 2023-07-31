import { Image } from '../image';
import { ImageLink } from '../image-link';

export interface HomeHeroBlock {
    id: number;
    hashAnchor: string | null;
    type: 'home-hero';
    heading: string;
    text: string;
    counterDigits: number;
    appStoreButtons: ImageLink[];
    background: Image;
    hand: Image;
    textColour: string;
}
