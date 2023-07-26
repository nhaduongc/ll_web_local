import { FC } from 'react';
import { format } from 'date-fns';
import DOMPurify from 'isomorphic-dompurify';

import { ArticleWithBody } from 'src/types/article';
import { HeaderRegular } from 'src/components/typography/header/regular';
import { BodySmall } from 'src/components/typography/body/small';
import { Category } from 'src/components/category';

const Body: FC<{ article: ArticleWithBody }> = ({ article }) => (
    <section className="text relative flex items-start justify-center gap-8 sm:gap-16 w-full px-4 z-10 py-14 md:py-20">
        <div className="flex flex-col items-center w-full">
            {article.dateCreated && (
                <BodySmall className="max-w-[700px] font-semibold">
                    {format(new Date(article.dateCreated), 'MMMM do, yyyy')}
                </BodySmall>
            )}

            <HeaderRegular variant="h1" className="max-w-[820px] mt-4 text-center">
                {article.title}
            </HeaderRegular>

            <BodySmall className="max-w-[700px] text-center mt-6">
                {article.shortDescription}
            </BodySmall>

            <div className="justify-center flex flex-wrap gap-4 max-w-[700px] my-10">
                {article.categories.map((category) => (
                    <Category category={category} key={category.id} />
                ))}
            </div>

            <div className="max-w-[1000px] w-full relative mt-6">
                <div className="w-full pt-[50%]">
                    <img
                        alt={article.image.alt}
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl"
                        src={article.image.url}
                    />
                </div>
            </div>

            <div
                className="w-full md:w-[80%] max-w-[700px] mt-8 flex flex-col items-start justify-center z-50 order-1 md:order-none content"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.body) }}
            />
        </div>
    </section>
);

export default Body;
