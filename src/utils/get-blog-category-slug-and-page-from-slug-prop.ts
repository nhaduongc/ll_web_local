interface CategoryAndPage {
    slug: string;
    page: number;
}

export const getBlogCategorySlugAndPageFromSlugProp = (
    slugs: string | string[] | undefined
): CategoryAndPage => {
    if (!slugs) {
        throw new Error('INVALID_URL_FORMAT');
    }

    const slug = Array.isArray(slugs) ? slugs.join('/') : slugs;

    const categoryMatchedRegex = slug.match(/^([\w-]+)$/);

    const categoryAndPageMatchedRegex = slug.match(/^([\w-]+)\/page\/(\d+)$/);

    if (categoryAndPageMatchedRegex) {
        return {
            slug: categoryAndPageMatchedRegex[1],
            page: Number(categoryAndPageMatchedRegex[2]),
        };
    }

    if (categoryMatchedRegex) {
        return {
            slug: categoryMatchedRegex![1],
            page: 1,
        };
    }

    throw new Error('INVALID_URL_FORMAT');
};
