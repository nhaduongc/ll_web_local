import React from 'react';

import Container from 'src/components/container';
import { HeroBlock } from 'src/types/blocks/hero';
import { FeatureContent } from 'src/components/feature-content';
import { HeaderLarge } from 'src/components/typography/header/large';

interface InternalProps {
    data: HeroBlock;
}

const Hero = ({ data }: InternalProps) => (
    <section
        className="hero w-full py-16 md:py-32 relative flex justify-center md:justify-start items-center overflow-hidden"
        id={data.hashAnchor ?? undefined}
        style={{ color: data.textColour }}
    >
        <Container className="z-20 text-center justify-center items-center flex flex-col">
            <HeaderLarge className="mt-3 w-full">{data.heading}</HeaderLarge>
            {data.text && <FeatureContent html={data.text} className="mt-2 w-full max-w-[700px]" />}
        </Container>
        <img
            src={data.background.url}
            alt={data.background.alt}
            className="absolute inset-0 w-full h-full object-cover z-10"
        />
    </section>
);

export default Hero;
