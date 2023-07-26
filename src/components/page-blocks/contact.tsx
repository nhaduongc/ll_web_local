import React from 'react';
import { useRouter } from 'next/router';

import Container from 'src/components/container';
import { FeatureContent } from 'src/components/feature-content';
import { ContactBlock } from 'src/types/blocks/contact';
import { useSubmitForm } from 'src/components/work-with-us-form/hooks/useSubmitContact';
import { ContactPayload } from 'src/components/work-with-us-form/api/types';
import { WorkWithUsInlineForm } from 'src/components/work-with-us-form/work-with-us-inline-form';
import { HeaderRegular } from 'src/components/typography/header/regular';

interface InternalProps {
    data: ContactBlock;
}

const Contact = ({ data }: InternalProps) => {
    const router = useRouter();

    const handleRedirect = () => {
        router.push(`${process.env.SITE_URL}/${data.redirectsTo}`);
    };

    const { mutate: submitContact, isError } = useSubmitForm(handleRedirect);

    const handleSubmitForm = (payload: ContactPayload) => submitContact(payload);

    return (
        <section
            className="hero w-full py-16 md:py-32 relative flex justify-center md:justify-start items-center overflow-hidden"
            id={data.hashAnchor ?? undefined}
            style={{ color: data.textColour, backgroundColor: data.backgroundColour }}
        >
            <Container className="z-20 text-center justify-center items-center flex flex-col">
                <div style={{ color: data.titleColour }}>
                    <HeaderRegular className="mt-3 w-full" variant="h3">
                        {data.title}
                    </HeaderRegular>
                </div>
                {data.text && (
                    <FeatureContent html={data.text} className="mt-2 w-full max-w-[700px]" />
                )}
                <div className="max-w-[600px] w-full mt-10">
                    <WorkWithUsInlineForm
                        data={data}
                        handleSubmitForm={handleSubmitForm}
                        isSubmitError={isError}
                    />
                </div>
            </Container>
        </section>
    );
};

export default Contact;
