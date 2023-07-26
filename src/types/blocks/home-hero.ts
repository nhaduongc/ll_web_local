import { Image } from '../image';
import { ImageLink } from '../image-link';

export interface HomeHeroBlock {
    id: number;
    hashAnchor: string | null;
    type: 'home-hero';
    heading: string;
    text: string;
    appStoreButtons: ImageLink[];
    background: Image;
    hand: Image;
    textColour: string;
}
