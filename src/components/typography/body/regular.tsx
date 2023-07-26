import { ReactNode } from 'react';

interface InternalProps {
    children: ReactNode;
    className?: string;
}

export const BodyRegular = ({ children, className }: InternalProps) => (
    <p className={`text-body ${className}`}>{children}</p>
);
