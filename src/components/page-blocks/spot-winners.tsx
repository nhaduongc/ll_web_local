import { Options, Splide, SplideSlide } from '@splidejs/react-splide';

import { BodyRegular } from '../typography/body/regular';
import { SpotWinnersBlock } from '../../types/blocks/spot-winners';

interface InternalProps {
    data: SpotWinnersBlock;
}

export const SpotWinners = ({ data }: InternalProps) => {
    const options: Options = {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        autoWidth: true,
        autoplay: true,
        interval: 4000,
        direction: 'ltr',
        pagination: false,
    };

    return (
        <section className="py-14 bg-white text-section relative" id={data.hashAnchor ?? undefined}>
            <Splide options={options}>
                {data.winners.map((winner) => (
                    <SplideSlide key={winner.id} className="splide__slide px-7">
                        <article className="text-center">
                            <div className="rounded-full overflow-hidden relative bg-grey mb-10 w-[167px] h-[167px]">
                                <img
                                    src={winner.image.url}
                                    alt={winner.image.alt}
                                    className="w-full h-full object-cover object-center flex items-center justify-center"
                                />
                            </div>

                            <BodyRegular>{winner.name}</BodyRegular>
                        </article>
                    </SplideSlide>
                ))}
            </Splide>
        </section>
    );
};
