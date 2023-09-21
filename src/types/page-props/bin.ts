import { BinWithInfo } from '../bin';

import { GeneralProps } from './general';

export interface BinProps extends GeneralProps {
    bin: BinWithInfo;
}
