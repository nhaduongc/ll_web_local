import { useEffect } from 'react';

/**
 * Used to restore scroll after route change after a components mounts
 */
export const useScrollToTop = () => {
    useEffect(() => window.scrollTo(0, 0), []);
};
