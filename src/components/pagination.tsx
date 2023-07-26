import React, { FC } from 'react';
import { useRouter } from 'next/router';

import ArrowIcon from 'src/assets/arrow.svg';

interface InternalProps {
    total: number;
    activePage: number;
    perPage: number;
    baseUrl: string;
}

const PreviousButton: FC<{ isDisabled: boolean; onNavigateToPreviousPage: VoidFunction }> = ({
    isDisabled,
    onNavigateToPreviousPage,
}) => {
    if (isDisabled) {
        return (
            <div className="w-12 h-12 flex text-gray-400 items-center justify-center">
                <ArrowIcon className="h-full w-full transform -scale-x-100 opacity-50 text-navy" />
            </div>
        );
    }
    return (
        <button
            type="button"
            onClick={onNavigateToPreviousPage}
            className="w-12 h-12 flex text-primary items-center justify-center cursor-pointer"
        >
            <ArrowIcon className="h-full w-full transform -scale-x-100 text-navy" />
        </button>
    );
};

const NextButton: FC<{ isDisabled: boolean; onNavigateToNextPage: VoidFunction }> = ({
    isDisabled,
    onNavigateToNextPage,
}) => {
    if (isDisabled) {
        return (
            <div className="w-12 h-12 flex text-gray-400 items-center justify-center">
                <ArrowIcon className="h-full w-full opacity-50 text-navy" />
            </div>
        );
    }
    return (
        <button
            type="button"
            onClick={onNavigateToNextPage}
            className="w-12 h-12 flex text-primary items-center justify-center cursor-pointer"
        >
            <ArrowIcon className="h-full w-full text-navy" />
        </button>
    );
};

const Page: FC<{ text: string; onNavigateToPage?: VoidFunction; isActive?: boolean }> = ({
    text,
    onNavigateToPage,
    isActive,
}) => {
    const classes = `text-center text-base p-2 w-12 h-12 rounded-full font-semibold leading-8 ${
        isActive ? 'text-white bg-green' : 'cursor-pointer hover:bg-gray-100 text-gray-700'
    }`;

    if (onNavigateToPage) {
        return (
            <button type="button" onClick={onNavigateToPage} className={classes}>
                {text}
            </button>
        );
    }

    return <div className={classes}>{text}</div>;
};

const Pages: FC<{
    index: number;
    onNavigateToPage: (page: number) => void;
    totalPages: number;
    activePage: number;
}> = ({ index, onNavigateToPage, totalPages, activePage }) => {
    // different states of pagination

    // if less than 7 pages render as:
    // <- i i a i i i i ->

    if (totalPages <= 7) {
        if (index > totalPages) {
            return null;
        }

        if (index === activePage) {
            return <Page text={index.toString()} isActive />;
        }

        return <Page text={index.toString()} onNavigateToPage={() => onNavigateToPage(index)} />;
    }

    // if greater than 7 page less than 3 or greater than third to last page, render as:
    // <- i a i … i i i ->

    if (activePage <= 3 || activePage >= totalPages - 2) {
        switch (index) {
            case 4:
                return <Page text="…" />;
            case 1:
            case 2:
            case 3:
                return <Page text={index.toString()} isActive={activePage === index} />;

            case 5:
            case 6:
            case 7:
                return (
                    <Page
                        text={index.toString()}
                        isActive={activePage === index - 7 + totalPages}
                    />
                );
            default:
                return null;
        }
    }

    // if on pages 4 to the 4th to last page, render as:
    // <- i … i a i … i ->

    if (activePage > 3 && activePage < totalPages - 2) {
        switch (index) {
            case 1:
                return <Page text="1" onNavigateToPage={() => onNavigateToPage(index)} />;

            case 2:
            case 6:
                return <Page text="…" />;
            case 7:
                return (
                    <Page
                        text={totalPages.toString()}
                        onNavigateToPage={() => onNavigateToPage(totalPages)}
                    />
                );

            case 3:
            case 5:
                return (
                    <Page
                        text={(activePage + index - 4).toString()}
                        onNavigateToPage={() => onNavigateToPage(activePage + index - 4)}
                    />
                );

            case 4:
                return <Page text={activePage.toString()} />;
            default:
                return null;
        }
    }

    return null;
};

const Pagination = ({ total, activePage, perPage, baseUrl }: InternalProps) => {
    const totalPages = Math.ceil(total / perPage);

    const router = useRouter();

    const onNavigateToPage = (index: number) => {
        if (index === 1) {
            router.push(baseUrl);
            return;
        }

        router.push(`${baseUrl}/page/${index}`);
    };

    const onNavigateToPreviousPage = () => onNavigateToPage(activePage - 1);

    const onNavigateToNextPage = () => onNavigateToPage(activePage + 1);

    return (
        <div className="w-full flex justify-center items-stretch gap-2">
            <PreviousButton
                isDisabled={activePage === 1}
                onNavigateToPreviousPage={onNavigateToPreviousPage}
            />

            {Array.from(Array(7).keys()).map((buttonIndex: number) => (
                <Pages
                    key={buttonIndex}
                    index={buttonIndex + 1}
                    onNavigateToPage={onNavigateToPage}
                    activePage={activePage}
                    totalPages={totalPages}
                />
            ))}

            <NextButton
                isDisabled={activePage === totalPages}
                onNavigateToNextPage={onNavigateToNextPage}
            />
        </div>
    );
};

export default Pagination;
