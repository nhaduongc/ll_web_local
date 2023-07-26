import React, { FC, Fragment, ReactNode } from 'react';

export const Menu: FC<{
    menuOpen: boolean;
    setMenuOpen: (open: boolean) => void;
    children: ReactNode;
}> = ({ menuOpen, setMenuOpen, children }) => {
    const burgerLine = `h-1 w-10 my-1 rounded-full bg-white transition ease transform duration-300`;

    // Close menu on button click
    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (event.target instanceof Element && !event.target.closest('a')) setMenuOpen(false);
    };

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <Fragment>
            <button
                type="button"
                className="lg:hidden flex flex-col h-12 w-12 rounded justify-center items-center group"
                onClick={toggleMenu}
            >
                <div className="flex flex-col items-center justify-center scale-75 md:scale-100">
                    <div
                        className={[burgerLine, menuOpen ? 'rotate-45 translate-y-3' : ''].join(
                            ' '
                        )}
                    />
                    <div
                        className={[burgerLine, menuOpen ? 'opacity-0' : 'opacity-100'].join(' ')}
                    />
                    <div
                        className={[burgerLine, menuOpen ? '-rotate-45 -translate-y-3' : ''].join(
                            ' '
                        )}
                    />
                </div>
            </button>
            <button
                type="button"
                className={[
                    'fixed lg:relative -z-10 lg:z-0',
                    'inset-0 lg:inset-auto',
                    'flex justify-center items-center lg:justify-start lg:items-start',
                    'bg-green/90 lg:bg-transparent',
                    menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible',
                    'transition-all lg:visible lg:opacity-100',
                ].join(' ')}
                onClick={handleButtonClick}
            >
                {children}
            </button>
        </Fragment>
    );
};
