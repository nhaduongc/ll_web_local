import React, { FC, Fragment } from 'react';

import { Block } from '../../types/page-props/page';

import { HomeHero } from './home-hero';
import { Text } from './text';
import { Marquee } from './marquee';
import { PreviousWinners } from './previous-winners';
import { SpotWinners } from './spot-winners';
import { Screens } from './screens';
import { ArticleSlider } from './article-slider';
import Hero from './hero';
import Contact from './contact';
import Image from './image';
import { TwoColumn } from './two-column';

export const PageBlocks: FC<{ blocks: Block[] }> = ({ blocks }) => (
    <Fragment>
        {blocks.map((blockData) => {
            switch (blockData.type) {
                case 'home-hero':
                    return <HomeHero data={blockData} key={blockData.id} />;
                case 'full-width-text':
                    return <Text data={blockData} key={blockData.id} />;
                case 'marquee':
                    return <Marquee data={blockData} key={blockData.id} />;
                case 'previous-winners':
                    return <PreviousWinners data={blockData} key={blockData.id} />;
                case 'spot-winners':
                    return <SpotWinners data={blockData} key={blockData.id} />;
                case 'call-to-action':
                    return <Screens data={blockData} key={blockData.id} />;
                case 'article-slider':
                    return <ArticleSlider data={blockData} key={blockData.id} />;
                case 'hero':
                    return <Hero data={blockData} key={blockData.id} />;
                case 'contact':
                    return <Contact data={blockData} key={blockData.id} />;
                case 'image':
                    return <Image data={blockData} key={blockData.id} />;
                case 'two-column':
                    return <TwoColumn data={blockData} key={blockData.id} />;
                default:
                    return null;
            }
        })}
    </Fragment>
);
