import axios from 'axios';

import { appClipBaseUrl } from './constants';

export const appClipClient = axios.create({
    baseURL: appClipBaseUrl,
    headers: { 'Content-Type': 'application/json' },
});
