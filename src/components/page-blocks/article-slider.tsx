import { Options, Splide, SplideSlide } from '@splidejs/react-splide';
import Link from 'next/link';
import { format } from 'date-fns';
import { Fragment, ReactNode } from 'react';

import { ArticleSliderBlock } from 'src/types/blocks/article-slider';
import { LabelRegular } from 'src/components/typography/label/regular';
import concatString from 'src/utils/concat-string';
import { Button } from 'src/components/button';
import { BodyRegular } from 'src/components/typography/body/regular';
import Container from 'src/components/container';
import { HeaderSmall } from 'src/components/typography/header/small';

interface InternalProps {
    data: ArticleSliderBlock;
}

export const ArticleSlider = ({ data }: InternalProps) => {
    const options: Options = {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        direction: 'ltr',
        pagination: false,
        arrows: false,
        snap: true,
        gap: '14px',
        perPage: 1,
        mediaQuery: 'min',
        breakpoints: {
            640: {
                perPage: 2,
            },
            768: {
                gap: '22px',
                perPage: 3,
                arrows: true,
            },
            1280: {
                perPage: 4,
            },
            1536: {
                perPage: 5,
            },
            1920: {
                perPage: 6,
            },
            2330: {
                perPage: 7,
            },
        },
    };

    const Waves: ReactNode[] = [
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            width="150%"
            height="100%"
            preserveAspectRatio="none"
        >
            <path
                fill="currentColor"
                d="M0,192L30,208C60,224,120,256,180,256C240,256,300,224,360,192C420,160,480,128,540,112C600,96,660,96,720,96C780,96,840,96,900,112C960,128,1020,160,1080,170.7C1140,181,1200,171,1260,160C1320,149,1380,139,1410,133.3L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            />
        </svg>,
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            width="150%"
            height="100%"
            preserveAspectRatio="none"
        >
            <path
                fill="currentColor"
                d="M0,192L30,165.3C60,139,120,85,180,101.3C240,117,300,203,360,218.7C420,235,480,181,540,160C600,139,660,149,720,170.7C780,192,840,224,900,213.3C960,203,1020,149,1080,154.7C1140,160,1200,224,1260,250.7C1320,277,1380,267,1410,261.3L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            />
        </svg>,
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            width="150%"
            height="100%"
            preserveAspectRatio="none"
        >
            <path
                fill="currentColor"
                d="M0,288L30,272C60,256,120,224,180,224C240,224,300,256,360,261.3C420,267,480,245,540,224C600,203,660,181,720,186.7C780,192,840,224,900,250.7C960,277,1020,299,1080,282.7C1140,267,1200,213,1260,197.3C1320,181,1380,203,1410,213.3L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            />
        </svg>,
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            width="150%"
            height="100%"
            preserveAspectRatio="none"
        >
            <path
                fill="currentColor"
                d="M0,128L30,122.7C60,117,120,107,180,117.3C240,128,300,160,360,192C420,224,480,256,540,250.7C600,245,660,203,720,170.7C780,139,840,117,900,112C960,107,1020,117,1080,128C1140,139,1200,149,1260,176C1320,203,1380,245,1410,266.7L1440,288L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            />
        </svg>,
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            width="150%"
            height="100%"
            preserveAspectRatio="none"
        >
            <path
                fill="currentColor"
                d="M0,128L30,138.7C60,149,120,171,180,165.3C240,160,300,128,360,117.3C420,107,480,117,540,138.7C600,160,660,192,720,186.7C780,181,840,139,900,117.3C960,96,1020,96,1080,133.3C1140,171,1200,245,1260,266.7C1320,288,1380,256,1410,240L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            />
        </svg>,
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            width="150%"
            height="100%"
            preserveAspectRatio="none"
        >
            <path
                fill="currentColor"
                d="M0,0L30,16C60,32,120,64,180,112C240,160,300,224,360,218.7C420,213,480,139,540,144C600,149,660,235,720,245.3C780,256,840,192,900,181.3C960,171,1020,213,1080,245.3C1140,277,1200,299,1260,272C1320,245,1380,171,1410,133.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            />
        </svg>,
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            width="150%"
            height="100%"
            preserveAspectRatio="none"
        >
            <path
                fill="currentColor"
                d="M0,288L30,277.3C60,267,120,245,180,197.3C240,149,300,75,360,64C420,53,480,107,540,133.3C600,160,660,160,720,181.3C780,203,840,245,900,229.3C960,213,1020,139,1080,90.7C1140,43,1200,21,1260,64C1320,107,1380,213,1410,266.7L1440,320L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            />
        </svg>,
    ];

    return (
        <section
            className="pt-20 sm:pt-28 pb-24 sm:pb-36 bg-white text-section relative px-8 sm:px-14 flex flex-col justify-center overflow-hidden"
            id={data.hashAnchor ?? undefined}
        >
            <Container className="z-20 flex text-center justify-center">
                <div style={{ color: data.textColour }}>
                    <HeaderSmall className="text-3xl">{data.title}</HeaderSmall>
                </div>
            </Container>
            <Splide options={options} className="z-20 relative article-splide mt-8 md:mt-12">
                {data.articles.map((article, index) => (
                    <SplideSlide
                        key={article.title}
                        className="splide__slide bg-navy rounded-2xl overflow-hidden"
                    >
                        <Link href={article.url} key={article.id}>
                            <a className="transition-opacity duration-300 flex flex-col group cursor-pointer min-h-full">
                                <div className="w-full pt-[80%] relative">
                                    {article.image && (
                                        <Fragment>
                                            <img
                                                alt={article.image.alt}
                                                className="w-full h-full top-0 left-0 absolute object-cover"
                                                src={article.image.url}
                                            />
                                            <div className="w-full h-10 text-navy absolute bottom-[-2px] left-0 z-10">
                                                {Waves[index % Waves.length]}
                                            </div>
                                        </Fragment>
                                    )}
                                </div>

                                <div className="w-full p-6 pt-4 flex flex-col flex-grow">
                                    {article.dateCreated && (
                                        <LabelRegular className="transition-opacity duration-500 group-hover:opacity-40 !text-white opacity-80">
                                            {format(new Date(article.dateCreated), 'MMMM do, yyyy')}
                                        </LabelRegular>
                                    )}

                                    <BodyRegular className="mt-2 transition-opacity duration-500 group-hover:opacity-40 text-white">
                                        {article.title}
                                    </BodyRegular>

                                    <LabelRegular className="mt-1 transition-opacity duration-500 group-hover:opacity-40 mb-6 !text-white opacity-80">
                                        {concatString(article.shortDescription, 80)}
                                    </LabelRegular>

                                    <Button colour="dark" className="mt-auto mb-0">
                                        Read More
                                    </Button>
                                </div>
                            </a>
                        </Link>
                    </SplideSlide>
                ))}
            </Splide>
            <img
                src={data.background.url}
                alt={data.background.alt}
                className="w-full h-full absolute top-0 left-0 object-cover z-10"
            />
        </section>
    );
};
