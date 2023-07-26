import { WinnerStory } from '../winner-story';

export interface PreviousWinnersBlock {
    id: number;
    hashAnchor: string | null;
    type: 'previous-winners';
    text: string;
    winners: WinnerStory[];
    textColour: string;
}
