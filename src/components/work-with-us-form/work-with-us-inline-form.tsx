import React, { FC, useState } from 'react';

import { ContactBlock } from 'src/types/blocks/contact';

import { ContactPayload } from './api/types';

const ContactError: FC<{
    isSubmitError: boolean;
}> = ({ isSubmitError }) => {
    if (!isSubmitError) {
        return null;
    }

    return (
        <label className="top-4 transform fixed left-1/2 -translate-x-1/2 bg-[#fca5a5] text-[#991b1b] px-3 py-2 rounded-lg text-sm text-center z-[1000]">
            There was an issue submitting the form. Please try again.
        </label>
    );
};

export const WorkWithUsInlineForm: FC<{
    data: ContactBlock;
    handleSubmitForm: (payload: ContactPayload) => void;
    isSubmitError: boolean;
}> = ({ data, handleSubmitForm, isSubmitError }) => {
    const [name, setName] = useState<string>('');

    const [nameError, setNameError] = useState<string>('');

    const [email, setEmail] = useState<string>('');

    const [emailError, setEmailError] = useState<string>('');

    const [organisation, setOrganisation] = useState<string>('');

    const [organisationError, setOrganisationError] = useState<string>('');

    const [message, setMessage] = useState<string>('');

    const [messageError, setMessageError] = useState<string>('');

    const updateName = (value: string) => {
        setName(value);
        setNameError('');
    };

    const updateEmail = (value: string) => {
        setEmail(value);
        setEmailError('');
    };

    const updateOrganisation = (value: string) => {
        setOrganisation(value);
        setOrganisationError('');
    };

    const updateMessage = (value: string) => {
        setMessage(value);
        setMessageError('');
    };

    const submitForm = async () => {
        let error = false;

        setNameError('');
        setEmailError('');
        setOrganisationError('');
        setMessageError('');

        try {
            if (name === '') {
                setNameError('Name cannot be empty');
                error = true;
            }

            if (email === '') {
                setEmailError('Email cannot be empty');
                error = true;
            }

            if (organisation === '') {
                setOrganisationError('Organisation cannot be empty');
                error = true;
            }

            if (error) {
                throw new Error();
            }

            handleSubmitForm({
                Name: name,
                Email: email,
                Organisation: organisation,
                Message: message,
            });
        } catch {
            console.error('Contact Form Error');
        }
    };

    return (
        <div className="w-full flex flex-col justify-center items-start relative">
            <ContactError isSubmitError={isSubmitError} />

            <form className="text-left w-full">
                <div className="flex flex-col w-full mt-6">
                    <label className="text-[12px]" style={{ color: data.textColour }}>
                        Name
                    </label>
                    <input
                        value={name}
                        onChange={({ target }) => updateName(target.value)}
                        name="name"
                        className="w-full py-3 border-b-2 border-b-white bg-transparent rounded-none outline-none"
                        style={{ color: data.textColour }}
                        placeholder="Name"
                    />
                    <label className="text-[#ff4545] text-[12px] mt-2">{nameError}</label>
                </div>
                <div className="flex flex-col w-full mt-6">
                    <label className="text-white text-[12px]">Email</label>
                    <input
                        value={email}
                        onChange={({ target }) => updateEmail(target.value)}
                        name="email"
                        className="w-full py-3 border-b-2 border-b-white bg-transparent rounded-none outline-none"
                        style={{ color: data.textColour }}
                        placeholder="Email"
                    />
                    <label className="text-[#ff4545] text-[12px]">{emailError}</label>
                </div>
                <div className="flex flex-col w-full mt-6">
                    <label className="text-white text-[12px] mt-2">Organisation</label>
                    <input
                        value={organisation}
                        onChange={({ target }) => updateOrganisation(target.value)}
                        name="organisation"
                        className="w-full py-3 border-b-2 border-b-white bg-transparent rounded-none outline-none"
                        style={{ color: data.textColour }}
                        placeholder="Organisation"
                    />
                    <label className="text-[#ff4545] text-[12px]">{organisationError}</label>
                </div>
                <div className="flex flex-col w-full mt-6">
                    <label className="text-white text-[12px] mt-2">Message / Enquiry</label>
                    <textarea
                        value={message}
                        onChange={({ target }) => updateMessage(target.value)}
                        name="message"
                        className="w-full py-3 border-b-2 border-b-white bg-transparent h-40 resize-none rounded-none outline-none"
                        style={{ color: data.textColour }}
                        placeholder="Message"
                    />
                    <label className="text-[#ff4545] text-[12px] mt-2">{messageError}</label>
                </div>
                <div className="flex flex-col w-full mt-12">
                    <button
                        type="button"
                        onClick={submitForm}
                        className="w-full py-3 bg-green-light text-navy"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};
