export type Link = {
    id: number;
    text: string;
    url: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
    ref?: 'nofollow' | 'noopener' | 'noreferrer' | 'external';
};
