import { useEffect, useState } from 'react';

import { formatNumberWithCommas } from 'src/utils/format-number-with-commas';

import { animateCounterValue } from './utils/animate-counter-value';
import { useGetCounterValue } from './hooks/use-get-counter-value';

export const Counter = () => {
    const [counterValue, setCounterValue] = useState(2000000);

    const [targetCounterValue, setTargetCounterValue] = useState(2000000);

    useEffect(() => {
        animateCounterValue(setCounterValue, counterValue, targetCounterValue, 6000);
    }, [targetCounterValue]);

    useGetCounterValue(setTargetCounterValue);

    return (
        <div className="justify-center items-center flex py-8 -mx-4 w-[calc(100%+32px)]">
            <div className="rounded-lg bg-black/[.1] w-[600px] max-w-full">
                <p className="text-header-medium xs:text-header-large md:text-header-xlarge font-inconsolata tracking-tighter px-8 md:px-16 py-4 md:py-8">
                    {formatNumberWithCommas(counterValue)}
                </p>
                <p className="text-body-small font-semibold bg-black/[.125] p-3">
                    pieces of litter binned, and counting!
                </p>
            </div>
        </div>
    );
};
