import React from 'react';

import { Counter } from 'src/components/counter/counter';

import Container from '../container';
import { HomeHeroBlock } from '../../types/blocks/home-hero';
import { AppStoreButtons } from '../app-store-buttons';
import { HeaderXLarge } from '../typography/header/x-large';
import { Content } from '../content';

interface InternalProps {
    data: HomeHeroBlock;
}

export const HomeHero = ({ data }: InternalProps) => (
    <section
        className="relative min-h-[789px] flex items-center bg-navy text-center pb-48 overflow-hidden"
        style={{ color: data.textColour }}
        id={data.hashAnchor ?? undefined}
    >
        <Container>
            <div className="relative z-20 w-[520px] lg:w-full max-w-full space-y-[30px] mx-auto py-14 z-30">
                <HeaderXLarge className="uppercase">{data.heading}</HeaderXLarge>
                <Content
                    html={data.text}
                    className="text-white w-full max-w-[520px] mx-auto feature-content"
                />
                <AppStoreButtons buttons={data.appStoreButtons} />
                <Counter />
            </div>
        </Container>

        <img
            src={data.hand.url}
            alt={data.hand.alt}
            className="absolute right-0 bottom-0 w-auto h-[500px] 2xl:h-auto hidden lg:block z-20"
        />

        <img
            src={data.background.url}
            alt={data.background.alt}
            className="absolute inset-0 w-full h-full object-cover z-10"
        />
    </section>
);
