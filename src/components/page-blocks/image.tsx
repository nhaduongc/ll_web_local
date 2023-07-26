import React from 'react';

import Container from 'src/components/container';
import { ImageBlock } from 'src/types/blocks/image';

interface InternalProps {
    data: ImageBlock;
}

const Image = ({ data }: InternalProps) => (
    <section
        className="hero w-full py-16 md:py-32 relative flex justify-center md:justify-start items-center overflow-hidden"
        style={{ backgroundColor: data.backgroundColour }}
        id={data.hashAnchor ?? undefined}
    >
        <Container className="z-20 text-center justify-center items-center text-navy-dark flex flex-col">
            <img
                src={data.image.url}
                alt={data.image.alt}
                className="h-auto object-cover rounded-xl min-w-[320px]"
                style={{ width: `${data.width}%` }}
            />
        </Container>
    </section>
);

export default Image;
