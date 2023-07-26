import {ReactNode} from "react";

interface InternalProps {
    children: ReactNode,
    className?: string
}

export const HeaderXLarge = ({children, className}: InternalProps) => (
    <h1 className={`text-header-medium md:text-header-xlarge font-black ${className}`}>
      {children}
    </h1>
)


