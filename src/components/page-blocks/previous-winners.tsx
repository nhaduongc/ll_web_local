import React from 'react';
import { Splide, SplideSlide, Options } from '@splidejs/react-splide';

import Container from 'src/components/container';
import { BodyRegular } from 'src/components/typography/body/regular';
import { PreviousWinnersBlock } from 'src/types/blocks/previous-winners';
import { FeatureContent } from 'src/components/feature-content';

interface InternalProps {
    data: PreviousWinnersBlock;
}

export const PreviousWinners = ({ data }: InternalProps) => {
    const options: Options = {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        autoWidth: true,
        autoplay: true,
        interval: 4000,
        direction: 'ltr',
        pagination: false,
    };

    return (
        <section
            className="py-14 bg-white text-section relative overflow-hidden max-w-full"
            id={data.hashAnchor ?? undefined}
        >
            <div style={{ color: data.textColour }}>
                <Container>
                    <FeatureContent
                        html={data.text}
                        className="w-full max-w-[1050px] mx-auto text-center mb-10"
                    />
                </Container>
            </div>

            <Splide options={options}>
                {data.winners.map((winner) => (
                    <SplideSlide key={winner.id} className="px-7 pt-1">
                        <article className="text-center group transition-transform hover:-translate-y-1">
                            <a
                                href={winner.link.url}
                                title={winner.link.text}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="rounded-lg overflow-hidden relative bg-grey transition shadow-md group-hover:shadow-xl mb-6 w-[255px] h-[310px]">
                                    <img
                                        src={winner.image.url}
                                        alt={winner.image.alt}
                                        className="w-full h-full object-cover object-center rounded-md"
                                    />
                                </div>

                                <div className="transition-colors group-hover:text-green">
                                    <BodyRegular>{winner.title}</BodyRegular>
                                </div>
                            </a>
                        </article>
                    </SplideSlide>
                ))}
            </Splide>
        </section>
    );
};
