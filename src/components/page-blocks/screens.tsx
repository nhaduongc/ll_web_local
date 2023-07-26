import React from 'react';
import { Options, Splide, SplideSlide } from '@splidejs/react-splide';

import Container from '../container';
import { BodyRegular } from '../typography/body/regular';
import { AppStoreButtons } from '../app-store-buttons';
import { ScreensBlock } from '../../types/blocks/screens';
import { FeatureContent } from '../feature-content';

interface InternalProps {
    data: ScreensBlock;
}

export const Screens = ({ data }: InternalProps) => {
    const options: Options = {
        gap: '74px',
        perPage: 4,
        pagination: false,
        arrows: false,
        breakpoints: {
            1299: {
                perPage: 3,
                width: 900,
            },
            1023: {
                perPage: 2,
                width: 600,
            },
            767: {
                type: 'drag',
                fixedWidth: 200,
                width: '100%',
                gap: '40px',
                focus: 'center',
            },
        },
    };

    return (
        <section
            className="pt-14 pb-[194px] max-w-full overflow-hidden relative"
            style={{ color: data.textColour }}
            id={data.hashAnchor ?? undefined}
        >
            <Container>
                <div className="w-full max-w-[1050px] mx-auto flex flex-col items-center text-center mb-14 z-20 relative">
                    <img src={data.logo.url} alt={data.logo.alt} className="h-[97px] mb-14" />
                    <FeatureContent html={data.topContent} />
                </div>
                <Splide className="mb-16 xl:px-9 app-slider z-20 relative" options={options}>
                    {data.screens.map((screen) => (
                        <SplideSlide key={screen.id}>
                            <div
                                className="font-bold mb-6 text-center"
                                style={{ color: screen.textColour }}
                            >
                                <BodyRegular>{screen.title}</BodyRegular>
                            </div>
                            <div className="w-full relative">
                                <div className="absolute inset-0 rounded-[15%] shadow-lg" />
                                <img
                                    src={screen.image.url}
                                    alt={screen.image.alt}
                                    className="w-full h-auto relative z-10"
                                />
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
                <div className="w-full max-w-[1050px] mx-auto flex flex-col items-center text-center mb-10 z-20 relative">
                    <FeatureContent className="mb-10" html={data.bottomContent} />
                    <AppStoreButtons buttons={data.appStoreButtons} />
                </div>
            </Container>
            <img
                className="inset-0 w-full h-full absolute object-cover z-10"
                src={data.background.url}
                alt={data.background.alt}
            />
        </section>
    );
};
