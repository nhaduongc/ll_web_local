import { appClipClient } from '../appclip/client';

import { BinDtoToHeadProps } from './DtoToProps';

export const getBinData = async (binId: string) => {
    try {
        const { data: bin } = await appClipClient.post('/appclip/bin', { binId });
        if (!bin) throw new Error('BIN_NOT_FOUND');

        return {
            head: BinDtoToHeadProps(bin),
            bin,
        };
    } catch (error) {
        throw new Error('BIN_NOT_FOUND');
    }
};
