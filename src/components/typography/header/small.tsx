import { ReactNode } from 'react';

interface InternalProps {
    children: ReactNode;
    className: string;
    variant?: string;
}

export const HeaderSmall = ({ children, className, variant = 'h2' }: InternalProps) => {
    switch (variant) {
        case 'h1':
            return <h1 className={`text-body-lead font-bold ${className}`}>{children}</h1>;
        case 'h2':
            return <h2 className={`text-body-lead font-bold ${className}`}>{children}</h2>;
        case 'h3':
            return <h3 className={`text-body-lead font-bold ${className}`}>{children}</h3>;
        case 'h4':
            return <h4 className={`text-body-lead font-bold ${className}`}>{children}</h4>;
        case 'h5':
            return <h5 className={`text-body-lead font-bold ${className}`}>{children}</h5>;
        default:
            return <h6 className={`text-body-lead font-bold ${className}`}>{children}</h6>;
    }
};
