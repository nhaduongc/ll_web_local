import type { Image } from './image';
import type { Link } from './link';

export type WinnerStory = {
    id: number;
    link: Link;
    image: Image;
    title: string;
};
