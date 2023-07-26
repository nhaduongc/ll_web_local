import { ReactNode } from 'react';

interface InternalProps {
    children: ReactNode;
    className?: string;
}

export const LabelSmall = ({ children, className }: InternalProps) => (
    <label className={`text-label-small block text-zinc-600 ${className}`}>{children}</label>
);
