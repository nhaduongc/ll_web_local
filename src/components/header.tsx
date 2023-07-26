import { FC } from 'react';
import Link from 'next/link';

import { HeaderProps } from 'src/types/page-props/header';

import Container from './container';
import { Menu } from './menu';
import { Button } from './button';

export const Header: FC<{
    menuOpen: boolean;
    setMenuOpen: (open: boolean) => void;
    header: HeaderProps;
}> = ({ menuOpen, setMenuOpen, header }) => {
    const handleCloseMenu = () => setMenuOpen(false);

    return (
        <header className="sticky z-50 w-100 h-16 md:h-[82px] top-0 right-0 left-0 bg-green text-white flex items-center">
            <Container>
                <div className="flex items-center justify-start gap-8">
                    <div className="mr-auto pb-1">
                        <Link href="/">
                            {header.logo && (
                                <img
                                    src={header.logo.url}
                                    alt={header.logo.alt}
                                    className="h-8 md:h-11 w-auto cursor-pointer"
                                />
                            )}
                        </Link>
                    </div>

                    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
                        <div className="flex flex-col lg:flex-row space-y-9 lg:space-y-0 lg:space-x-4">
                            {header.links.map((link) => (
                                <Button
                                    key={link.id}
                                    colour="light"
                                    href={link.url}
                                    onClick={handleCloseMenu}
                                >
                                    {link.text}
                                </Button>
                            ))}
                        </div>
                    </Menu>
                </div>
            </Container>
        </header>
    );
};
