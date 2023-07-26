export const getBlogPageFromSlugProp = (slugs: string | string[] | undefined): number => {
    if (!slugs) {
        return 1;
    }

    const slug = Array.isArray(slugs) ? slugs.join('/') : slugs;

    const pageMatchedRegex = slug.match(/^page\/(\d+)$/);

    if (!pageMatchedRegex) {
        throw new Error('INVALID_URL_FORMAT');
    }

    return Number(pageMatchedRegex[1]);
};
