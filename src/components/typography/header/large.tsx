import { ReactNode } from 'react';

interface InternalProps {
    children: ReactNode;
    className?: string;
}

export const HeaderLarge = ({ children, className }: InternalProps) => (
    <h2 className={`text-header-small md:text-header-large font-black ${className}`}>{children}</h2>
);
