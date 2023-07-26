import React, { FC } from 'react';

import Breadcrumbs from 'src/components/breadcrumbs';
import { Breadcrumb } from 'src/types/breadcrumbs';
import Container from 'src/components/container';
import { HeaderRegular } from 'src/components/typography/header/regular';
import { BodyRegular } from 'src/components/typography/body/regular';

const Hero: FC<{ title: string; description?: string | null; crumbs: Breadcrumb[] }> = ({
    title,
    description,
    crumbs,
}) => (
    <section className="blog-hero w-full py-20 md:py-40 relative flex justify-center md:justify-start items-center overflow-hidden">
        <Container className="z-20 text-center justify-center text-navy-dark">
            <Breadcrumbs
                crumbs={crumbs}
                textClassName="text-[18px]"
                containerClassName="justify-center"
            />
            <HeaderRegular className="uppercase mt-3 w-full" variant="h1">
                {title}
            </HeaderRegular>
            {description && (
                <BodyRegular className="mt-6 w-full mx-w-[700px]">{description}</BodyRegular>
            )}
        </Container>
        <img
            className="w-full h-full absolute object-cover inset-0 z-10"
            alt="background"
            src="/hero-background.png"
        />
    </section>
);

export default Hero;
