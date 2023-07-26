export interface TextBlock {
    id: number;
    hashAnchor: string | null;
    type: 'full-width-text';
    heading: string;
    text: string;
    titleColour: string;
    textColour: string;
    backgroundColour: string;
}
