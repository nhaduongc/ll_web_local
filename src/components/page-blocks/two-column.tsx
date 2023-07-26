import React from 'react';

import Container from 'src/components/container';
import { HeaderLarge } from 'src/components/typography/header/large';
import { TwoColumnBlock } from 'src/types/blocks/two-column';
import { FeatureContent } from 'src/components/feature-content';

interface InternalProps {
    data: TwoColumnBlock;
}

export const TwoColumn = ({ data }: InternalProps) => (
    <section
        className="py-16 md:py-28 text-center"
        style={{ backgroundColor: data.backgroundColour }}
        id={data.hashAnchor ?? undefined}
    >
        <Container className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
            <img
                className={`w-full h-auto rounded-3xl ${data.reverse ? 'order-2' : ''}`}
                src={data.image.url}
                alt={data.image.alt}
            />
            <div
                className="flex flex-col items-center space-y-[30px] text-center max-w-[900px] mx-auto"
                style={{ color: data.textColour }}
            >
                <div style={{ color: data.titleColour }}>
                    <HeaderLarge>{data.heading}</HeaderLarge>
                </div>
                <FeatureContent html={data.text} />
            </div>
        </Container>
    </section>
);
