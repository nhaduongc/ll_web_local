import { Fragment, useState } from 'react';

import { FooterProps } from 'src/types/page-props/footer';

import Container from './container';
import { WorkWithUsForm } from './work-with-us-form/work-with-us-form';
import { HeaderRegular } from './typography/header/regular';
import { BodySmall } from './typography/body/small';
import { useSubmitForm } from './work-with-us-form/hooks/useSubmitContact';
import { ContactPayload } from './work-with-us-form/api/types';

interface InternalProps {
    footer: FooterProps;
}

const Footer = ({ footer }: InternalProps) => {
    const [isWorkWithUsFormOpen, setIsWorkWithUsFormOpen] = useState(false);

    const openWorkWithUsForm = () => {
        setIsWorkWithUsFormOpen(true);
    };

    const handleCloseWorkWithUsForm = () => {
        setIsWorkWithUsFormOpen(false);
    };

    const { mutate: submitContact, isError } = useSubmitForm(handleCloseWorkWithUsForm);

    const handleSubmitForm = (payload: ContactPayload) => submitContact(payload);

    return (
        <Fragment>
            <WorkWithUsForm
                isOpen={isWorkWithUsFormOpen}
                onClose={handleCloseWorkWithUsForm}
                handleSubmitForm={handleSubmitForm}
                isSubmitError={isError}
            />
            <footer className="flex-shrink-1 flex-grow-0 text-center text-white">
                <div className="bg-navy py-16">
                    <Container>
                        <div className="space-y-4">
                            <div className="text-green mb-12">
                                <HeaderRegular>
                                    <span className="font-black">{footer.text}</span>
                                </HeaderRegular>
                            </div>
                            <div className="flex items-center justify-center space-x-9">
                                {footer.socialLinks.map((social) => (
                                    <a
                                        key={social.id}
                                        href={social.url}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img src={social.image.url} alt={social.image.alt} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="bg-green py-10">
                    <Container>
                        <div className="flex flex-col space-y-8 items-center font-semibold order-2">
                            <img
                                src="/logo-white.svg"
                                alt="LitterLotto Logo"
                                className="h-[53px] mb-2"
                            />
                            <ul className="flex flex-col lg:flex-row space-y-8 md:space-y-0 lg:space-x-8 justify-center">
                                {footer.links.map((link) => (
                                    <li key={link.id}>
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="transition-opacity text-white hover:opacity-75"
                                        >
                                            <BodySmall>{link.text}</BodySmall>
                                        </a>
                                    </li>
                                ))}
                                <li>
                                    <button
                                        type="button"
                                        onClick={openWorkWithUsForm}
                                        id="work-with-us"
                                        className="transition-opacity text-white hover:opacity-75"
                                    >
                                        <BodySmall>Partner with us</BodySmall>
                                    </button>
                                </li>
                            </ul>
                            <div className="flex flex-wrap justify-center">
                                {footer.images.map((image) => (
                                    <img
                                        key={image.id}
                                        className="h-16 flex-shrink-0"
                                        src={image.url}
                                        alt={image.alt}
                                    />
                                ))}
                            </div>
                            <BodySmall>&copy; LitterLotto {new Date().getFullYear()}</BodySmall>
                        </div>
                    </Container>
                </div>
            </footer>
        </Fragment>
    );
};

export default Footer;
