import { ReactNode } from 'react';

interface InternalProps {
    children: ReactNode;
    className?: string;
}

export const LabelLarge = ({ children, className }: InternalProps) => (
    <label className={`text-label-large block ${className}`}>{children}</label>
);
