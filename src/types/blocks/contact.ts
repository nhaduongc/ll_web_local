export interface ContactBlock {
    id: number;
    hashAnchor: string | null;
    type: 'contact';
    title: string;
    text: string;
    redirectsTo: string;
    titleColour: string;
    textColour: string;
    backgroundColour: string;
}
