import {ReactNode} from "react";

interface InternalProps {
    children: ReactNode
}

export const BodyLarge = ({children}: InternalProps) => (
    <p className="text-body-large">
      {children}
    </p>
)


