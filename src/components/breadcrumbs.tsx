import React, { FC } from 'react';
import Link from 'next/link';
import DOMPurify from 'isomorphic-dompurify';

import concatString from 'src/utils/concat-string';
import { Breadcrumb } from 'src/types/breadcrumbs';

const Slash: FC<{ isLast: boolean; textClassName?: string }> = ({ isLast, textClassName }) => {
    if (isLast) return null;

    return <p className={`mx-1 ${textClassName}`}>/</p>;
};

export interface InternalProps {
    crumbs: Breadcrumb[];
    containerClassName?: string;
    textClassName?: string;
}

const Breadcrumbs = ({ crumbs, textClassName, containerClassName }: InternalProps) => {
    const schema = `{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [${crumbs
            .map(
                (crumb: Breadcrumb, index: number) => `{
            "@type": "ListItem",
            "position": ${index + 1},
            "item": {
                "name": "${crumb.text}",
                "@id": "${process.env.SITE_URL + crumb.href}"
            }
        }`
            )
            .join(',')}]}`;

    return (
        <div className={`flex-wrap flex ${containerClassName}`}>
            {crumbs.map((crumb: Breadcrumb, index: number) => (
                <div className="flex" key={crumb.id}>
                    <Link href={crumb.href}>
                        <a
                            className={`cursor-pointer ${textClassName} ${
                                index === crumbs.length - 1 ? 'underline' : ''
                            }`}
                        >
                            {concatString(crumb.text)}
                        </a>
                    </Link>
                    <Slash isLast={crumbs.length === index + 1} textClassName={textClassName} />
                </div>
            ))}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(schema) }}
            />
        </div>
    );
};

export default Breadcrumbs;
