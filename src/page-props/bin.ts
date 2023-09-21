import { GetServerSideProps } from 'next';

import { BinProps } from 'src/types/page-props/bin';
import { getSlugFromSlugProp } from 'src/utils/get-slug-from-slug-prop';

import { getBinData } from '../api/bin-props/requests';

import { footer } from './global/footer';
import { header } from './global/header';

export const getBinServerSideProps: GetServerSideProps<BinProps> = async (context) => {
    try {
        const slug = getSlugFromSlugProp(context.params?.slug);

        const { head, bin } = await getBinData(slug);

        return {
            props: {
                head,
                header: await header(),
                bin,
                footer: await footer(),
            },
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
};
