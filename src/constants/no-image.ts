import { Image } from '../types/image';

export const noImage: Image = {
    id: '0000-0000-0000-0000',
    url: `${process.env.DIRECTUS_BASE_URL}/assets/${process.env.NO_IMAGE}`,
    alt: 'No Image',
};
