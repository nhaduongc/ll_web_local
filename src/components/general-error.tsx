import { FC, ReactNode } from 'react';

import ErrorIcon from 'src/assets/error.svg';

export const GeneralError: FC<{ children: ReactNode }> = ({ children }) => (
    <div className="flex flex-col items-center py-20 justify-center gap-4">
        <ErrorIcon className="text-green w-14 h-14" />
        {children}
    </div>
);
