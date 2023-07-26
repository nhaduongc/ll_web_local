import React from 'react';

import Container from './container';
import { BodyRegular } from './typography/body/regular';

interface InternalProps {
    total: number;
    activePage: number;
    perPage: number;
}

const ArticleCountRange = ({ total, activePage, perPage }: InternalProps) => {
    const from = (activePage - 1) * perPage + 1;
    const to = Math.min(activePage * perPage, total);
    const of = total;

    return (
        <Container>
            <BodyRegular className="text-black-500 !text-[17px]">
                {`Article${from === to ? '' : 's'} ${from} - ${to} of ${of}`}
            </BodyRegular>
        </Container>
    );
};

export default ArticleCountRange;
