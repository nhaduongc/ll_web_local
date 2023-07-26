export const getPageFromSlugProp = (slugs: string | string[] | undefined): string => {
    const slug = Array.isArray(slugs) ? slugs.join('/') : slugs;

    if (!slug) return '';

    return slug;
};
