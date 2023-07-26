import { useQuery } from '@tanstack/react-query';

import { getCounterValue } from '../api/requests';

export const useGetCounterValue = (handleSetNewValue: (newValue: number) => void) => {
    useQuery({
        queryKey: ['counter-value'],
        queryFn: () => getCounterValue(),
        refetchInterval: 8000,
        onSuccess: (data) => {
            if (data) handleSetNewValue(data);
        },
    });
};
