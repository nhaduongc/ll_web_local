import { MainLayout } from 'src/layout/main-layout';
import Hero from 'src/components/blog/hero';
import Articles from 'src/components/blog/articles';
import Pagination from 'src/components/pagination';
import { getBlogServerSideProps } from 'src/page-props/blog';
import { BlogProps } from 'src/types/page-props/blog';
import ArticleCountRange from 'src/components/article-count-range';
import { BlogCategories } from 'src/components/blog-categories';
import Container from 'src/components/container';

export const getServerSideProps = getBlogServerSideProps;

const ArticlesPage = (props: BlogProps) => (
    <MainLayout props={{ head: props.head, header: props.header, footer: props.footer }}>
        <Hero title="All Articles" crumbs={props.crumbs} />

        <Container className="flex flex-col gap-8 md:gap-14 pt-10 md:pt-16 pb-14 md:pb-24">
            <BlogCategories categories={props.categories} />

            <ArticleCountRange
                total={props.articlesMeta.total}
                perPage={props.articlesMeta.perPage}
                activePage={props.articlesMeta.activePage}
            />

            <Articles articles={props.articles} />

            <Pagination
                total={props.articlesMeta.total}
                perPage={props.articlesMeta.perPage}
                activePage={props.articlesMeta.activePage}
                baseUrl="/articles"
            />
        </Container>
    </MainLayout>
);

export default ArticlesPage;
