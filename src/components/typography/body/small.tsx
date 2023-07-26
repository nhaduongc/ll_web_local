import { ReactNode } from 'react';

interface InternalProps {
    children: ReactNode;
    className?: string;
}

export const BodySmall = ({ children, className }: InternalProps) => (
    <p className={`text-body-small ${className}`}>{children}</p>
);
