import { MainLayout } from 'src/layout/main-layout';
import Hero from 'src/components/blog/hero';
import Articles from 'src/components/blog/articles';
import Pagination from 'src/components/pagination';
import { getBlogCategoryServerSideProps } from 'src/page-props/blog-category';
import { BlogCategoryProps } from 'src/types/page-props/blog-category';
import ArticleCountRange from 'src/components/article-count-range';
import { BlogCategories } from 'src/components/blog-categories';
import Container from 'src/components/container';
import { GeneralError } from 'src/components/general-error';
import { BodyRegular } from 'src/components/typography/body/regular';

export const getServerSideProps = getBlogCategoryServerSideProps;

const BlogCategoryPage = (props: BlogCategoryProps) => (
    <MainLayout props={{ head: props.head, header: props.header, footer: props.footer }}>
        <Hero title={props.name} description={props.description} crumbs={props.crumbs} />

        {props.articles.length > 0 ? (
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
                    baseUrl={props.url}
                />
            </Container>
        ) : (
            <Container className="flex flex-col gap-8 md:gap-14 pt-10 md:pt-16 pb-14 md:pb-24">
                <BlogCategories categories={props.categories} />
                <GeneralError>
                    <BodyRegular>No articles to display</BodyRegular>
                </GeneralError>
            </Container>
        )}
    </MainLayout>
);

export default BlogCategoryPage;
