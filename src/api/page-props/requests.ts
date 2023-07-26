import { directusClient } from 'src/api/directus/client';

import { PageEndpoints } from './constants';
import { PageDtoToBlocksProps, PageDtoToHeadProps } from './DtoToProps';

export const getPageData = async (slug: string) => {
    const endpoint =
        slug === '' ? PageEndpoints.GetHomePage : PageEndpoints.GetPage.replace('{slug}', slug);

    const { data: response } = await directusClient.get(endpoint);

    if (response.data.length === 0) {
        throw new Error('PAGE_NOT_FOUND');
    }

    return {
        head: PageDtoToHeadProps(response.data[0]),
        blocks: PageDtoToBlocksProps(response.data[0]),
    };
};
