import { observable } from '@legendapp/state';
import { enableReactUse } from '@legendapp/state/config/enableReactUse';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';

import { getBinServerSideProps } from 'src/page-props/bin';
import { BinProps } from 'src/types/page-props/bin';

import { appClipClient } from '../../api/appclip/client';
import { BinWithInfo } from '../../types/bin';

enableReactUse();

export const getServerSideProps = getBinServerSideProps;

const InstantState = observable<{
    page: 'welcome' | 'camera' | 'submit' | 'result';
    binData?: BinWithInfo;
    imageBase64?: string;
    reward?: any;
}>({ page: 'welcome' });

function WelcomeScreen() {
    const binData = InstantState.binData.use();
    const logoURL = binData?.tagged_bin_group?.logoURL;
    const intro = binData?.tagged_bin_type?.intro;
    const title = binData?.tagged_bin_type?.title;
    const footerTitle = binData?.tagged_bin_type.footer_title;
    const footer = binData?.tagged_bin_type.footer;
    const bannerImage = binData?.tagged_bin_type.banner_image;
    const warning = binData?.tagged_bin_type.warning;

    return (
        <div className="bg-gray-200 flex flex-col items-center px-4">
            <div className="bg-blue-500 w-full flex items-center">
                <img
                    src="/logo-white.svg"
                    alt="LitterLotto Logo"
                    className="my-4 w-full h-6 self-center"
                />
            </div>
            {logoURL && (
                <img
                    src={logoURL}
                    alt="Logo"
                    className="h-28 bg-white rounded-md mb-2 w-full aspect-auto object-scale-down"
                />
            )}
            <div className="bg-white w-full rounded-md flex flex-col items-center mb-2">
                {bannerImage && (
                    <img
                        src={bannerImage}
                        alt="Banner"
                        width={1500}
                        height={730}
                        className="rounded-t-md"
                    />
                )}
                <div className="w-full px-3 py-3">
                    {title ? (
                        <p className="font-bold text-xl text-center leading-7">{title}</p>
                    ) : null}
                    {intro ? (
                        <p className="font-medium text-sm leading-6 text-center">{intro}</p>
                    ) : null}
                </div>
            </div>
            <div className="bg-white w-full rounded-md py-3 px-3 mb-2">
                {footerTitle ? (
                    <p className="font-bold text-xl text-center leading-7 mb-2">{footerTitle}</p>
                ) : null}
                {footer ? (
                    <p className="font-medium text-sm leading-6 text-center">{footer}</p>
                ) : null}
            </div>
            <div className="flex items-center bg-yellow-200 w-full rounded-md py-3 border border-black">
                <img src="/warning.png" alt="Warning" width={30} height={30} className="mx-4" />
                <div className="flex-1 pr-2">
                    {warning ? <p className="font-bold text-sm leading-6">{warning}</p> : null}
                </div>
            </div>
            <button
                type="button"
                onClick={() => InstantState.page.set('camera')}
                className="mt-6 mb-6"
            >
                <img src="/play-button.png" alt="Play Button" width={65} height={65} />
            </button>
        </div>
    );
}

function CameraScreen() {
    // const width = typeof window !== 'undefined' ? window.innerWidth : 1400;
    // const height = typeof window !== 'undefined' ? window.innerHeight : 1400;
    const webcamRef = useRef<Webcam>(null);
    const capture = useCallback(() => {
        const imgBase64 = webcamRef.current?.getScreenshot();
        if (!imgBase64) return;
        InstantState.imageBase64.set(imgBase64);
        InstantState.page.set('submit');
    }, [webcamRef]);
    return (
        <section className="absolute w-full h-full flex justify-center bg-green">
            <Webcam
                ref={webcamRef}
                audio={false}
                screenshotFormat="image/jpeg"
                forceScreenshotSourceSize
                videoConstraints={{ facingMode: 'environment' }}
                style={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'fill',
                    position: 'absolute',
                }}
            />
            <button type="button" onClick={capture} className="absolute bottom-11 z-10">
                <img src="/cameraButton.png" alt="Play Button" className="w-16 h-16 z-10" />
            </button>
        </section>
    );
}

function DataURIToBlob(dataURI: string) {
    const splitDataURI = dataURI.split(',');
    const byteString =
        splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1]);
    const mimeString = splitDataURI[0].split(':')[1].split(';')[0];

    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);

    return new Blob([ia], { type: mimeString });
}

function SubmittingOverlay() {
    const messages = [
        'Submitting your entry...',
        'Entering the jackpot...',
        'Checking for spot prizes...',
        'Not much longer...',
    ];
    const [processMessage, setProcessMessage] = useState('');

    useEffect(() => {
        let i = 0;
        const intervalMessage = setInterval(() => {
            if (i < 3) {
                i += 1;
            }

            setProcessMessage(messages[i]);
            if (i === 3) clearInterval(intervalMessage);
        }, 1000);

        return () => clearInterval(intervalMessage);
    }, []);
    return (
        <div className="absolute w-full h-full bg-black bg-opacity-80 flex items-center justify-center">
            <div className="justify-center items-center flex flex-col">
                <span className="text-white font-bold text-xl pb-2">{processMessage}</span>
                <svg
                    aria-hidden="true"
                    className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                    />
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                    />
                </svg>
            </div>
        </div>
    );
}

function SubmitScreen() {
    const [loading, setLoading] = useState(false);
    const imgBase64 = InstantState.imageBase64.use();
    const submit = async () => {
        const image = DataURIToBlob(imgBase64);

        const formData = new FormData();
        formData.append('file', image, `${Date.now()}.jpeg`);
        formData.append('binId', InstantState.binData.binId.get());

        try {
            setLoading(true);
            const { data } = await appClipClient.post('appclip/submit', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            InstantState.reward.set(data?.reward);
            InstantState.page.set('result');

            return true;
        } catch (error) {
            return false;
        } finally {
            setLoading(false);
        }
    };
    return (
        <section className="bg-green flex justify-center">
            {!!imgBase64 && <img src={imgBase64} alt="submit" className="absolute w-full h-full" />}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="44"
                viewBox="0 -960 960 960"
                width="44"
                role="button"
                className="absolute top-5 left-2 z-10 opacity-50"
                onClick={() => {
                    InstantState.page.set('camera');
                    InstantState.imageBase64.set(undefined);
                }}
            >
                <path
                    fill="white"
                    d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"
                />
            </svg>
            <button
                type="button"
                onClick={submit}
                className="absolute bottom-11 w-1/2 bg-green rounded-full items-center justify-center h-12"
            >
                <p className="text-white text-lg font-bold">Submit</p>
            </button>
            {!!loading && <SubmittingOverlay />}
        </section>
    );
}

function ResultScreen() {
    const binData = InstantState.binData.use();
    const completionTitle = binData?.tagged_bin_group?.completion_title;
    const completionIntro = binData?.tagged_bin_group?.completion_intro;
    const completionFooterTitle = binData?.tagged_bin_group?.completion_footer_title;
    const completionFooter = binData?.tagged_bin_group?.completion_footer;
    const imgBase64 = InstantState.imageBase64.use();
    return (
        <section className="bg-black flex absolute w-full h-full">
            {!!imgBase64 && <img src={imgBase64} alt="submit" className="absolute w-full h-full" />}
            <div className="absolute w-full h-full bg-black bg-opacity-80" />
            <div className="w-full px-6 pt-10 z-10">
                {completionTitle ? (
                    <p className="text-4xl text-center leading-7 font-bold text-white">
                        {completionTitle}
                    </p>
                ) : null}
                {completionIntro ? (
                    <p className="font-bold text-2xl leading-6 text-center text-white pt-4">
                        {completionIntro}
                    </p>
                ) : null}
            </div>

            <div className="mx-4 absolute z-10 bottom-11 px-6 py-3 rounded-xl bg-white items-center flex flex-col">
                {completionFooterTitle ? (
                    <p className="font-bold text-2xl text-center leading-7">
                        {completionFooterTitle}
                    </p>
                ) : null}
                {completionFooter ? (
                    <p className="text-lg leading-6 text-center">{completionFooter}</p>
                ) : null}
                <Link href="https://play.google.com/store/apps/details?id=com.litterlotto.app">
                    <img
                        alt="download play store"
                        src="/download-play-store.svg"
                        className="w-1/2 pt-3"
                    />
                </Link>
            </div>
        </section>
    );
}

export default function Bin(props: BinProps) {
    const page = InstantState.page.use();
    const { bin: binData } = props;

    useEffect(() => {
        InstantState.binData.set(binData);
    }, [binData]);

    return (
        <div id="instant-container" className="absolute w-full h-full">
            {page === 'welcome' && <WelcomeScreen />}
            {page === 'camera' && <CameraScreen />}
            {page === 'submit' && <SubmitScreen />}
            {page === 'result' && <ResultScreen />}
        </div>
    );
}
