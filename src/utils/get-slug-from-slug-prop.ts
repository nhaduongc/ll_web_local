export const getSlugFromSlugProp = (slugs: string | string[] | undefined): string => {
    if (!slugs) {
        throw new Error('INVALID_URL_FORMAT');
    }

    const slug = Array.isArray(slugs) ? slugs.join('/') : slugs;

    const articleSlugMatchedRegex = slug.match(/^([\w-]+)$/);

    if (!articleSlugMatchedRegex) {
        throw new Error('INVALID_URL_FORMAT');
    }

    return articleSlugMatchedRegex[1];
};
