import { useEffect } from 'react';
import { useRouter } from 'next/router';

/**
 * This hook handles anchor links.
 * react-router-dom can't solve hash links and scroll to the specific element
 */
export const useHashAnchor = () => {
    const { asPath } = useRouter();

    useEffect(() => {
        const hash = (asPath as string).split('#')[1];

        if (hash) {
            const sourceElement = document.getElementById(hash.substring(1));

            if (sourceElement) {
                sourceElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [asPath]);
};
