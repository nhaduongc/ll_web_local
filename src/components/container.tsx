import { FC, ReactNode } from 'react';

const Container: FC<{ children: ReactNode | ReactNode[]; className?: string }> = ({
    children,
    className,
}) => <div className={`container px-8 mx-auto ${className}`}>{children}</div>;

export default Container;
