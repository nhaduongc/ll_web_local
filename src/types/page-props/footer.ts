import { Link } from 'src/types/link';
import { ImageLink } from 'src/types/image-link';
import { Image } from 'src/types/image';

export interface FooterProps {
    text: string;
    logo: Image;
    images: Image[];
    links: Link[];
    socialLinks: ImageLink[];
}
