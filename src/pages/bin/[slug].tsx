import { observable } from '@legendapp/state';
import { enableReactUse } from '@legendapp/state/config/enableReactUse';
import Head from 'next/head';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Pressable, SafeAreaView, Text, TextInput, View } from 'react-native';
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
    submittedData?: { entryId: string };
    email?: string;
}>({ page: 'result' });

function AppClipCard({ onContinue }: { onContinue(): void }) {
    const [buttonClicked, setButtonClicked] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const handleTransitionEnd = () => buttonClicked && onContinue();
    useEffect(() => {
        setIsMounted(true);
    }, []);
    return (
        <div
            className="m-2 overflow-hidden flex flex-col self-end rounded-3xl flex flex-1"
            style={{
                background: 'rgba(255, 255, 255, 0.80)',
                backdropFilter: 'blur(5px)',
                // eslint-disable-next-line no-nested-ternary
                transform: isMounted
                    ? buttonClicked
                        ? 'translateY(100%)'
                        : 'translateY(0)'
                    : 'translateY(100%)',
                transition: 'transform 0.2s ease-in-out',
            }}
            onTransitionEnd={handleTransitionEnd}
        >
            <img
                alt="thumbnail"
                className="flex-1 bg-gray-200 object-cover"
                src="https://is2-ssl.mzstatic.com/image/thumb/Purple116/v4/0b/d6/85/0bd68545-ab3b-08e3-e307-035760ddf9ae/3200061a-c5df-4c00-b8c7-dc0d2bc8a101_WhatsApp_Image_2023-09-04_at_15.09.24.png/1800x1200bb.png"
            />
            <div className="p-5 flex self-stretch flex-row items-center justify-between self-start">
                <div>
                    <p className="text-xl font-bold w-3/4">Win 1,000 in the prize draw</p>
                    <p className="text-sm">Bin the right waste here</p>
                </div>
                <button
                    type="button"
                    className="px-4 py-2 bg-green rounded-full"
                    onClick={() => {
                        // document.addEventListener('fullscreenchange', (event) => {
                        //     setTimeout(() => {
                        //         setFullscreen(true);
                        //     }, 1000);
                        // });
                        document.documentElement?.requestFullscreen?.({ navigationUI: 'hide' });
                        // @ts-ignore
                        window.screen.orientation?.lock('portrait');
                        setButtonClicked(true);
                    }}
                >
                    <p className="text- text-white">Play</p>
                </button>
            </div>
            <div className="mx-5 h-px bg-gray-500 bg-opacity-10" />
            <div className="px-5 py-4 flex self-stretch flex-row items-center self-start">
                <img
                    alt="smal-logo"
                    src="/icon-192x192.png"
                    className="w-7 mr-2 aspect-square rounded-md"
                />
                <div>
                    <p className="text-xs text-gray-400">Powered by</p>
                    <p className="text-[2vh] font-medium">LitterLotto</p>
                </div>

                <a
                    href="https://play.google.com/store/apps/details?id=com.litterlotto.app"
                    className="ml-auto px-4 py-2 flex flex-row items-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 50 50"
                        className="fill-gray-400"
                    >
                        <path d="M 7.125 2 L 28.78125 23.5 L 34.71875 17.5625 L 8.46875 2.40625 C 8.03125 2.152344 7.5625 2.011719 7.125 2 Z M 5.3125 3 C 5.117188 3.347656 5 3.757813 5 4.21875 L 5 46 C 5 46.335938 5.070313 46.636719 5.1875 46.90625 L 27.34375 24.90625 Z M 36.53125 18.59375 L 30.1875 24.90625 L 36.53125 31.1875 L 44.28125 26.75 C 45.382813 26.113281 45.539063 25.304688 45.53125 24.875 C 45.519531 24.164063 45.070313 23.5 44.3125 23.09375 C 43.652344 22.738281 38.75 19.882813 36.53125 18.59375 Z M 28.78125 26.3125 L 6.9375 47.96875 C 7.300781 47.949219 7.695313 47.871094 8.0625 47.65625 C 8.917969 47.160156 26.21875 37.15625 26.21875 37.15625 L 34.75 32.25 Z" />
                    </svg>
                    <span className="text-xs text-gray-400 mx-1">Play Store</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        enableBackground="new 0 0 24 24"
                        height="10"
                        viewBox="0 0 24 24"
                        width="10"
                        className="fill-gray-400"
                    >
                        <g>
                            <path d="M0,0h24v24H0V0z" fill="none" />
                        </g>
                        <g>
                            <polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" />
                        </g>
                    </svg>
                </a>
            </div>
        </div>
    );
}

function WelcomeScreen() {
    const binData = InstantState.binData.use();
    const logoURL = binData?.tagged_bin_group?.logoURL;
    const intro = binData?.tagged_bin_type?.intro;
    const title = binData?.tagged_bin_type?.title;
    const footerTitle = binData?.tagged_bin_type.footer_title;
    const footer = binData?.tagged_bin_type.footer;
    const bannerImage = binData?.tagged_bin_type.banner_image;
    const warning = binData?.tagged_bin_type.warning;
    const [AppClipCardVisible, setAppClipCardVisible] = useState(true);

    useEffect(() => {
        document.documentElement.style.setProperty('--screen-height', `${window.screen.height}px`);
    }, []);

    return (
        <div
            style={{ height: 'var(--screen-height)' }}
            className="bg-gray-200 flex flex-col px-4 h-[100vh] justify-between py-[1.5vh]"
        >
            <img
                src="/logo-white.svg"
                alt="LitterLotto Logo"
                className="my-[1.5vh] w-full h-[3vh] self-center"
            />
            {logoURL && (
                <img
                    src={logoURL}
                    alt="Logo"
                    className="h-[15vh] bg-white rounded-md w-full aspect-auto object-scale-down"
                />
            )}
            <div className="bg-white w-full rounded-md flex flex-col items-center">
                {bannerImage && (
                    <img
                        src={bannerImage}
                        alt="Banner"
                        width={1500}
                        height={730}
                        className="rounded-t-md aspect-[2]"
                    />
                )}
                <div className="w-full p-[1vh]">
                    {title ? <p className="font-bold text-[3vh] text-center">{title}</p> : null}
                    {intro ? <p className="font-medium text-[2vh] text-center">{intro}</p> : null}
                </div>
            </div>
            <div className="bg-white w-full rounded-md p-[2vh]">
                {footerTitle ? (
                    <p className="font-bold text-[3vh] text-center">{footerTitle}</p>
                ) : null}
                {footer ? <p className="font-medium text-[2vh] text-center">{footer}</p> : null}
            </div>
            <div className="flex items-center bg-yellow-200 w-full rounded-md py-[2vh] border border-black">
                <img src="/warning.png" alt="Warning" width={30} height={30} className="mx-4" />
                <div className="flex-1 pr-2">
                    {warning ? <p className="font-bold text-[2vh] leading-6">{warning}</p> : null}
                </div>
            </div>

            <button
                type="button"
                onClick={() => InstantState.page.set('camera')}
                className="self-center"
            >
                <img src="/play-button.png" alt="Play Button" className="w-[10vh] aspect-square" />
            </button>
            {AppClipCardVisible && (
                <div
                    className="absolute left-0 right-0 top-0 bottom-0 flex items-stretch"
                    style={{
                        background: 'rgba(0, 0,0, 0.6)',
                        backdropFilter: 'blur(10px)',
                    }}
                >
                    <AppClipCard onContinue={() => setAppClipCardVisible(false)} />
                </div>
            )}
        </div>
    );
}

function CameraScreen() {
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
                className="w-full h-full absolute object-cover"
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

const Loading = () => (
    <View
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <View>
            <ActivityIndicator size="large" color="#fff" />
        </View>
    </View>
);

function EmailAndAgeCheckPanel() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [isThirteenOrOver, setThirteenOrOver] = useState(false);
    const [show, setShow] = useState(true);

    const save = async () => {
        if (!isThirteenOrOver) {
            alert('Please confirm your age');
            return;
        }

        setLoading(true);
        try {
            const submittedData = InstantState.submittedData.get();
            const response = await appClipClient.post(
                `appclip/submitUserInfo`,
                { entryId: submittedData.entryId, email },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            // const response = await submitUserInfo({ entryId, email });
            // await Store.save('clip_email', email);
            setLoading(false);

            if (response.status === 200) {
                alert('Saved successfully');
            } else {
                throw new Error('UnKnown');
            }
        } catch (error) {
            setLoading(false);
            alert(`Error: ${error}`);
        }
    };

    const skip = () => {
        setShow(false);
    };

    if (!show) return null;
    return (
        <SafeAreaView style={{ alignSelf: 'center', marginTop: 24 }}>
            <View
                style={{
                    backgroundColor: '#fff',
                    // width: WINDOW_WIDTH - 12,
                    borderRadius: 15,
                    paddingTop: 24,
                    marginHorizontal: 16,
                    paddingVertical: 16,
                }}
            >
                <Text
                    style={{
                        // ...styles.textBold,
                        color: '#000',
                        fontSize: 18,
                        textAlign: 'center',
                        lineHeight: 24,
                    }}
                >
                    We need your email and age verification in order to award prizes
                </Text>
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    style={{
                        // fontFamily: Typography.FONT_FAMILY_REGULAR,
                        fontSize: 16,
                        marginTop: 20,
                        width: '90%',
                        alignSelf: 'center',
                        padding: 12,
                        height: 44,
                        backgroundColor: '#f1f2f3',
                        borderRadius: 9,
                    }}
                    placeholder="Email"
                    selectionColor="#63666A"
                />

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: 20,
                        width: '90%',
                        height: 30,
                        alignSelf: 'center',
                        alignItems: 'flex-end',
                    }}
                >
                    <Text
                        style={{
                            marginRight: 12,
                            // fontFamily: Typography.FONT_FAMILY_REGULAR,
                            color: '#000',
                            fontSize: 16,
                            textAlign: 'center',
                            lineHeight: 24,
                        }}
                    >
                        I&apos;m 13+
                    </Text>
                    <Pressable
                        onPress={() => {
                            setThirteenOrOver(!isThirteenOrOver);
                        }}
                        style={{
                            overflow: 'hidden',
                            backgroundColor: '#f1f2f3',
                            height: 30,
                            width: 30,
                            borderRadius: 6,
                        }}
                    >
                        {isThirteenOrOver && (
                            <Pressable
                                onPress={() => {
                                    setThirteenOrOver(!isThirteenOrOver);
                                }}
                                style={{ height: 30, width: 30, borderRadius: 6 }}
                            >
                                <View
                                    style={{
                                        backgroundColor: '#a2d929',
                                        height: 6,
                                        width: 15,
                                        borderRadius: 3,
                                        position: 'absolute',
                                        left: 2,
                                        bottom: 10,
                                        transform: [{ rotate: '45deg' }],
                                    }}
                                />
                                <View
                                    style={{
                                        backgroundColor: '#a2d929',
                                        height: 6,
                                        width: 20,
                                        borderRadius: 3,
                                        position: 'absolute',
                                        left: 8,
                                        bottom: 12,
                                        transform: [{ rotate: '135deg' }],
                                    }}
                                />
                            </Pressable>
                        )}
                    </Pressable>
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>
                    <Pressable
                        disabled={!email}
                        style={{
                            alignItems: 'center',
                            width: 80,
                            marginRight: 30,
                            backgroundColor: email ? '#000' : '#808593',
                            paddingVertical: 12,
                            borderRadius: 9,
                        }}
                        onPress={save}
                    >
                        <Text
                            style={{
                                color: '#fff',
                                // fontFamily: Typography.FONT_FAMILY_MEDIUM,
                                fontSize: 18,
                            }}
                        >
                            Save
                        </Text>
                    </Pressable>
                    <Pressable
                        style={{
                            alignItems: 'center',
                            width: 80,
                            backgroundColor: '#f1f2f3',
                            paddingVertical: 12,
                            borderRadius: 9,
                        }}
                        onPress={skip}
                    >
                        <Text
                            style={{
                                color: '#000',
                                // fontFamily: Typography.FONT_FAMILY_MEDIUM,
                                fontSize: 18,
                            }}
                        >
                            Skip
                        </Text>
                    </Pressable>
                </View>
            </View>
            {loading && <Loading />}
        </SafeAreaView>
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
        formData.append('email', InstantState.email.get());

        try {
            setLoading(true);
            const { data } = await appClipClient.post('appclip/submit', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            InstantState.submittedData.set(data.reward);
            InstantState.page.set('result');

            return true;
        } catch (error) {
            return false;
        } finally {
            setLoading(false);
        }
    };
    return (
        <section className="bg-black flex flex-col absolute w-full h-full items-center justify-end py-11">
            {!!imgBase64 && (
                <img src={imgBase64} alt="submit" className="w-full h-full absolute object-cover" />
            )}
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
            <div className="flex flex-col items-center">
                <button
                    type="button"
                    onClick={submit}
                    className="bottom-11 w-1/2 bg-green rounded-full items-center justify-center h-12"
                >
                    <p className="text-white text-lg font-bold">Submit</p>
                </button>
            </div>
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
        <section className="bg-black flex flex-col absolute w-full h-full justify-between py-11">
            {!!imgBase64 && (
                <img src={imgBase64} alt="submit" className="w-full h-full absolute object-cover" />
            )}
            <div className="absolute w-full h-full bg-black bg-opacity-80" />
            <div className="px-6 pt-10 z-10">
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
            <EmailAndAgeCheckPanel />
            <div className="mx-4 z-10 px-6 py-3 rounded-xl bg-white items-center flex flex-col">
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
            <Head>
                <title>LitterLotto Chip & Bin</title>
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#A2D929" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"
                />
            </Head>
            {page === 'welcome' && <WelcomeScreen />}
            {page === 'camera' && <CameraScreen />}
            {page === 'submit' && <SubmitScreen />}
            {page === 'result' && <ResultScreen />}
        </div>
    );
}
