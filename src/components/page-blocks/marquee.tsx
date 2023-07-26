import { Fragment, useEffect, useRef, useState } from 'react';

import { MarqueeBlock } from '../../types/blocks/marquee';

interface InternalProps {
    data: MarqueeBlock;
}

export const Marquee = ({ data }: InternalProps) => {
    const list = useRef<HTMLUListElement>(null);

    const transform = data.reverse ? 'rotate-[-2deg]' : 'rotate-[2deg]';

    const trackWidth = 'w-[calc(100%_+_40px)] max-w-[calc(100%_+_40px) -ml-4';

    const justify = data.reverse ? 'justify-end' : 'justify-start';

    const animation = data.reverse ? 'animate-marquee-reverse' : 'animate-marquee';

    const [time, setTime] = useState(0);

    useEffect(() => {
        const distance = list.current?.offsetWidth ?? 0; // Width of list

        setTime(distance / (data.speed * 2) ** 2);
    }, []);

    return (
        <section
            className="relative z-10 h-[140px] flex flex-col overflow-hidden"
            style={{
                backgroundColor: data.topColour,
            }}
        >
            <div
                className="flex-1"
                style={{
                    backgroundColor: data.topColour,
                }}
            />
            <div
                className="flex-1"
                style={{
                    backgroundColor: data.bottomColour,
                }}
            />
            <div
                className={`${trackWidth} absolute top-1/2 -translateY-[1/2] -left-[20px] h-0 flex items-center`}
            >
                <div
                    className={`${transform} ${justify} bg-white shadow-[0_0_8px_0_rgba(0,0,0,0.15)] py-[7px] overflow-x-hidden w-full flex`}
                >
                    <ul
                        className={`${animation} flex justify-start`}
                        style={{ animationDuration: `${time}s` }}
                        ref={list}
                    >
                        {Array.from(new Array(20).keys()).map((index) => (
                            <Fragment key={index}>
                                {data.items.map((item) => (
                                    <li
                                        key={item.id}
                                        className="text-green uppercase font-bold whitespace-nowrap px-6"
                                        aria-hidden={index !== 0}
                                    >
                                        <span className="text-body-lead">{item.text}</span>
                                    </li>
                                ))}
                            </Fragment>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
