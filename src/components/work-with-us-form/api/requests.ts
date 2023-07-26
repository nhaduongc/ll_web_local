import axios from 'axios';

import { ContactPayload } from './types';

export const postContact = async (payload: ContactPayload): Promise<number | undefined> => {
    const { data } = await axios.post(
        `${process.env.DIRECTUS_BASE_URL}/items/Contact_Requests`,
        payload
    );
    return data.id;
};
