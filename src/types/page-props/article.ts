import { ArticleWithBody } from '../article';

import { GeneralProps } from './general';

export interface ArticleProps extends GeneralProps {
    article: ArticleWithBody;
}
