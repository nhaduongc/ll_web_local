import React from 'react';

import Container from 'src/components/container';
import { HeaderLarge } from 'src/components/typography/header/large';
import { TextBlock } from 'src/types/blocks/text';
import { FeatureContent } from 'src/components/feature-content';

interface InternalProps {
    data: TextBlock;
}

export const Text = ({ data }: InternalProps) => (
    <section
        className="pt-14 pb-[70px] text-center"
        style={{ backgroundColor: data.backgroundColour, color: data.textColour }}
        id={data.hashAnchor ?? undefined}
    >
        <Container>
            <div className="flex flex-col items-center space-y-[30px] text-center max-w-[900px] mx-auto">
                <div style={{ color: data.titleColour }}>
                    <HeaderLarge>{data.heading}</HeaderLarge>
                </div>
                <FeatureContent html={data.text} />
            </div>
        </Container>
    </section>
);
