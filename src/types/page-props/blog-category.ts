import { BlogCategory } from '../blog-category';

import { BlogProps } from './blog';

export interface BlogCategoryProps extends BlogProps {
    description: string | null;
    parent?: BlogCategory;
}
