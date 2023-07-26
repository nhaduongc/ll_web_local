import React from 'react';

import { MainLayout } from 'src/layout/main-layout';
import { getPageServerSideProps } from 'src/page-props/page';
import { PageProps } from 'src/types/page-props/page';
import { PageBlocks } from 'src/components/page-blocks/page-blocks';

export const getServerSideProps = getPageServerSideProps;

const Page = (props: PageProps) => (
    <MainLayout props={{ head: props.head, header: props.header, footer: props.footer }}>
        <PageBlocks blocks={props.blocks} />
    </MainLayout>
);

export default Page;
