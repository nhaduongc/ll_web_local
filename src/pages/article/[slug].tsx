import React from 'react';

import { MainLayout } from 'src/layout/main-layout';
import { getArticleServerSideProps } from 'src/page-props/article';
import Body from 'src/components/article/body';
import { ArticleProps } from 'src/types/page-props/article';

export const getServerSideProps = getArticleServerSideProps;

export default function Article(props: ArticleProps) {
    return (
        <MainLayout props={{ head: props.head, header: props.header, footer: props.footer }}>
            <Body article={props.article} />
        </MainLayout>
    );
}
