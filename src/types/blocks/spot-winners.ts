import { Winner } from '../winner';

export interface SpotWinnersBlock {
    id: number;
    hashAnchor: string | null;
    type: 'spot-winners';
    winners: Winner[];
}
