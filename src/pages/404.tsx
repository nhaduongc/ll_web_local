import React from 'react';

import { MainLayout } from 'src/layout/main-layout';
import { getStaticPageProps } from 'src/page-props/static';
import { StaticProps } from 'src/types/page-props/static';

export const getStaticProps = getStaticPageProps;

const Page404 = (props: StaticProps) => (
    <MainLayout props={{ head: props.head, header: props.header, footer: props.footer }}>
        <section className="w-full relative h-screen flex flex-col items-center justify-center text-primary-500">
            <p className="text-2xl md:text-4xl lg:text-5xl font-semibold">404</p>
            <p className="mt-2 text-lg md:text-xl">Page not found</p>
        </section>
    </MainLayout>
);

export default Page404;
