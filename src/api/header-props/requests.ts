import { directusClient } from 'src/api/directus/client';

import { HeaderEndpoints } from './constants';
import { HeaderDtoToProps } from './DtoToProps';

export const getHeaderData = async () => {
    const { data: response } = await directusClient.get(HeaderEndpoints.GetHeader);
    return HeaderDtoToProps(response.data);
};
