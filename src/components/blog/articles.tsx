import { FC } from 'react';
import { format } from 'date-fns';
import Link from 'next/link';

import { Article } from 'src/types/article';
import { Button } from 'src/components/button';
import Container from 'src/components/container';
import { BodySmall } from 'src/components/typography/body/small';
import { LabelRegular } from 'src/components/typography/label/regular';
import concatString from 'src/utils/concat-string';

const Articles: FC<{ articles: Article[] }> = ({ articles }) => (
    <section className="articles relative flex justify-center">
        <Container>
            <div className="w-full grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                {articles.map((article) => (
                    <Link href={article.url} key={article.id}>
                        <a className="transition-opacity duration-300 flex flex-col group cursor-pointer mb-4 min-h-full">
                            <div className="w-full pt-[80%] relative">
                                {article.image && (
                                    <img
                                        alt={article.image.alt}
                                        className="w-full h-full top-0 left-0 absolute object-cover rounded-2xl"
                                        src={article.image.url}
                                    />
                                )}
                            </div>

                            {article.dateCreated && (
                                <LabelRegular className="mt-3 transition-opacity duration-500 group-hover:opacity-40">
                                    {format(new Date(article.dateCreated), 'EEEE MMMM do, yyyy')}
                                </LabelRegular>
                            )}

                            <BodySmall className="mt-2 transition-opacity duration-500 group-hover:opacity-40">
                                {article.title}
                            </BodySmall>

                            <LabelRegular className="mt-1 transition-opacity duration-500 group-hover:opacity-40 mb-6">
                                {concatString(article.shortDescription, 80)}
                            </LabelRegular>

                            <Button colour="dark" className="mt-auto mb-0">
                                Read More
                            </Button>
                        </a>
                    </Link>
                ))}
            </div>
        </Container>
    </section>
);

export default Articles;
