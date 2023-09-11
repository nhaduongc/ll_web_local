import { FC, Fragment, ReactNode, useEffect, useState } from 'react';
import { useIntercom } from 'react-use-intercom';

import Footer from 'src/components/footer';
import { Head } from 'src/components/head';
import { Header } from 'src/components/header';
import { FooterProps } from 'src/types/page-props/footer';
import { HeadProps } from 'src/types/page-props/head';
import { HeaderProps } from 'src/types/page-props/header';

export const MainLayout: FC<{
    children: ReactNode;
    props: {
        head: HeadProps;
        header: HeaderProps;
        footer: FooterProps;
    };
}> = ({ children, props }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('overflow-hidden');
            return;
        }

        document.body.classList.remove('overflow-hidden');
    }, [menuOpen]);

    const { boot } = useIntercom();

    if (typeof window !== 'undefined') {
        boot();
    }

    return (
        <Fragment>
            <Head head={props.head} />
            <main>
                <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} header={props.header} />

                {children}

                <Footer footer={props.footer} />
            </main>
        </Fragment>
    );
};
