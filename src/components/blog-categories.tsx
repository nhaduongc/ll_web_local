import { FC } from 'react';

import { BlogCategory } from '../types/blog-category';

import Container from './container';
import { Category } from './category';

export const BlogCategories: FC<{ categories: BlogCategory[] }> = ({ categories }) => (
    <Container className="flex justify-center flex-wrap gap-4 max-w-[600px]">
        {categories.map((category) => (
            <Category key={category.id} category={category} />
        ))}
    </Container>
);
