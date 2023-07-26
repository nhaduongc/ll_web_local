import { HomeHeroBlock } from 'src/types/blocks/home-hero';
import { TextBlock } from 'src/types/blocks/text';
import { MarqueeBlock } from 'src/types/blocks/marquee';
import { PreviousWinnersBlock } from 'src/types/blocks/previous-winners';
import { SpotWinnersBlock } from 'src/types/blocks/spot-winners';
import { ScreensBlock } from 'src/types/blocks/screens';
import { ArticleSliderBlock } from 'src/types/blocks/article-slider';
import { HeroBlock } from 'src/types/blocks/hero';
import { ContactBlock } from 'src/types/blocks/contact';
import { ImageBlock } from 'src/types/blocks/image';
import { TwoColumnBlock } from 'src/types/blocks/two-column';

import { GeneralProps } from './general';

export type Block =
    | HomeHeroBlock
    | TextBlock
    | MarqueeBlock
    | PreviousWinnersBlock
    | SpotWinnersBlock
    | ScreensBlock
    | ArticleSliderBlock
    | HeroBlock
    | ContactBlock
    | ImageBlock
    | TwoColumnBlock;

export interface PageProps extends GeneralProps {
    blocks: Block[];
}
