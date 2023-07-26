import { FC } from 'react';
import Link from 'next/link';

import { BlogCategory } from 'src/types/blog-category';

import { BodySmall } from './typography/body/small';

export const Category: FC<{ category: BlogCategory }> = ({ category }) => (
    <Link key={category.id} href={category.url}>
        <a className="block px-4 py-3 text-sm bg-yellow rounded-2xl font-semibold">
            <BodySmall className="text-black">{category.name}</BodySmall>
        </a>
    </Link>
);
