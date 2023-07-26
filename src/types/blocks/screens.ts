import { Image } from '../image';
import { ImageLink } from '../image-link';
import { Screen } from '../screen';

export interface ScreensBlock {
    id: number;
    hashAnchor: string | null;
    type: 'call-to-action';
    background: Image;
    topContent: string;
    bottomContent: string;
    logo: Image;
    appStoreButtons: ImageLink[];
    screens: Screen[];
    textColour: string;
}
