import { useEffect } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import { QueryClientProvider } from '@tanstack/react-query';
import TagManager from 'react-gtm-module';
import { IntercomProvider } from 'react-use-intercom';

import 'src/styles/main.scss';
import { queryClient } from 'src/lib/query-client';

import { isClientSide } from '../utils/is-client-side';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
    // initialise GTM
    if (isClientSide() && process.env.GTM_ID) TagManager.initialize({ gtmId: process.env.GTM_ID });

    useEffect(() => {
        const handleRouteStart = () => NProgress.start();
        const handleRouteDone = () => NProgress.done();

        Router.events.on('routeChangeStart', handleRouteStart);
        Router.events.on('routeChangeComplete', handleRouteDone);
        Router.events.on('routeChangeError', handleRouteDone);

        return () => {
            // Make sure to remove the event handler on unmount!
            Router.events.off('routeChangeStart', handleRouteStart);
            Router.events.off('routeChangeComplete', handleRouteDone);
            Router.events.off('routeChangeError', handleRouteDone);
        };
    }, []);

    NProgress.configure({ showSpinner: false });

    return (
        <QueryClientProvider client={queryClient}>
            <IntercomProvider appId="odj361d5">
                <Component {...pageProps} />
            </IntercomProvider>
        </QueryClientProvider>
    );
};

export default MyApp;
