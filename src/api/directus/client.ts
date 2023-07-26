import axios from 'axios';

import { directusBaseUrl } from './constants';

export const directusClient = axios.create({
    baseURL: directusBaseUrl,
});
