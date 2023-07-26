import { MarqueeItem } from '../marquee-item';

export interface MarqueeBlock {
    id: number;
    type: 'marquee';
    items: MarqueeItem[];
    reverse: boolean;
    topColour: string;
    bottomColour: string;
    speed: number;
}
