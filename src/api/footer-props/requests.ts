import { directusClient } from 'src/api/directus/client';

import { FooterDtoToProps } from './DtoToProps';
import { FooterEndpoints } from './constants';

export const getFooterData = async () => {
    const { data: response } = await directusClient.get(FooterEndpoints.GetFooter);

    return FooterDtoToProps(response.data);
};
