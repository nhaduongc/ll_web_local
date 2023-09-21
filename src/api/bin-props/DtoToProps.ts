import { BinWithInfo } from 'src/types/bin';

import { HeadProps } from '../../types/page-props/head';
import { appClipBaseUrl } from '../appclip/constants';

export const BinDtoToHeadProps = (data: BinWithInfo): HeadProps => ({
    metaTitle: data.tagged_bin_type.title,
    metaDescription: data.tagged_bin_type.footer,
    canonical: `${appClipBaseUrl}/appclip/bin/${data.binId}`,
});
