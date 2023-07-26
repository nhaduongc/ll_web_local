import { Image } from '../image';

export interface TwoColumnBlock {
    id: number;
    hashAnchor: string | null;
    type: 'two-column';
    reverse: boolean;
    heading: string;
    text: string;
    image: Image;
    titleColour: string;
    textColour: string;
    backgroundColour: string;
}
