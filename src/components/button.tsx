import { FC, ReactNode } from 'react';

export const Button: FC<{
    href?: string;
    colour: 'dark' | 'light';
    children: ReactNode;
    onClick?: VoidFunction;
    className?: string;
}> = ({ href, colour, children, onClick, className }) => {
    const colourClasses = {
        dark: 'text-green',
        light: 'bg-transparent hover:bg-white active:bg-grey active:border-grey active:text-green text-white hover:text-green border-white',
    };

    if (href) {
        return (
            <a
                href={href}
                onClick={onClick}
                className={`inline-flex items-center justify-center h-[49px] px-[27px] border-[3px] whitespace-nowrap leading-5 rounded-full min-w-button
                         text-body-small font-semibold overflow-hidden transition-colors ${colourClasses[colour]} ${className}`}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            type="button"
            onClick={onClick}
            className={`inline-flex items-center justify-center h-[49px] px-[27px] border-[3px] whitespace-nowrap leading-5 rounded-full min-w-button
                         text-body-small font-semibold overflow-hidden transition-colors ${colourClasses[colour]} ${className}`}
        >
            {children}
        </button>
    );
};
