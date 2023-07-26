import React, { FC, useState } from 'react';

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

export const WorkWithUsForm: FC<{
    isOpen: boolean;
    onClose: VoidFunction;
    handleSubmitForm: (payload: ContactPayload) => void;
    isSubmitError: boolean;
}> = ({ isOpen, onClose, handleSubmitForm, isSubmitError }) => {
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
        <div
            id="work-with-us-modal"
            className={`w-screen h-screen top-0 left-0 fixed z-[1000] overflow-y-scroll transition-opacity duration-300 ${
                !isOpen && 'opacity-0 pointer-events-none'
            }`}
        >
            <div className="w-full flex flex-col justify-center items-center relative">
                <button
                    type="button"
                    aria-label="close form"
                    className="w-full min-h-full bg-black/[.4] absolute top-0 left-0"
                    onClick={onClose}
                />

                <ContactError isSubmitError={isSubmitError} />

                <div
                    id="work-with-us-success"
                    className="top-4 transform fixed left-1/2 -translate-x-1/2 transition-[opacity,transform] duration-500 opacity-0 pointer-events-none -translate-y-5 bg-[#86efac] text-[#166534] px-3 py-2 rounded-lg text-sm text-center z-[1000]"
                >
                    Request Received. Thank you!
                </div>

                <div className="h-40 flex-shrink-0 w-full" />
                <div className="bg-navy rounded-md shadow-xl px-4 py-16 xs:px-12 sm:px-16 md:p-20 max-w-[calc(100%-30px)] sm:max-w-[calc(100%-60px)] w-[600px] relative z-50 flex-shrink-0">
                    <button
                        onClick={onClose}
                        type="button"
                        aria-label="close form"
                        className="w-6 h-6 absolute top-6 right-6 before:w-7 before:h-[2px] before:absolute before:left-[-2px] before:rotate-45 before:top-1/2 before:transform before:-translate-y-1/2 before:bg-white after:w-[28px] after:h-[2px] after:absolute after:left-[-2px] after:-rotate-45 after:top-1/2 after:transform after:-translate-y-1/2 after:bg-white"
                    />
                    <h3 className="text-white text-body sm:text-body-lead font-black uppercase">
                        Partner with us
                    </h3>
                    <p className="text-white text-body-small mt-3">
                        {`Want to partner with us? Fill out the form below and we'll be in touch.`}
                    </p>
                    <form>
                        <div className="flex flex-col w-full mt-6">
                            <label className="text-white text-[12px]">Name</label>
                            <input
                                value={name}
                                onChange={({ target }) => updateName(target.value)}
                                name="name"
                                className="w-full py-3 border-b-2 border-b-white bg-transparent text-white rounded-none outline-none"
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
                                className="w-full py-3 border-b-2 border-b-white bg-transparent text-white rounded-none outline-none"
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
                                className="w-full py-3 border-b-2 border-b-white bg-transparent text-white rounded-none outline-none"
                                placeholder="Organisation"
                            />
                            <label className="text-[#ff4545] text-[12px]">
                                {organisationError}
                            </label>
                        </div>
                        <div className="flex flex-col w-full mt-6">
                            <label className="text-white text-[12px] mt-2">Message / Enquiry</label>
                            <textarea
                                value={message}
                                onChange={({ target }) => updateMessage(target.value)}
                                name="message"
                                className="w-full py-3 border-b-2 border-b-white bg-transparent h-40 resize-none text-white rounded-none outline-none"
                                placeholder="Message"
                            />
                            <label className="text-[#ff4545] text-[12px] mt-2">
                                {messageError}
                            </label>
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
                <div className="h-40 flex-shrink-0 w-full" />
            </div>
        </div>
    );
};
