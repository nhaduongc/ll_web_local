import { ReactNode } from 'react';

interface InternalProps {
    children: ReactNode;
    className?: string;
}

export const LabelRegular = ({ children, className }: InternalProps) => (
    <label className={`text-label block text-zinc-600 ${className}`}>{children}</label>
);
