import { easeOutQuart } from 'src/utils/ease-out-quart';

export const animateCounterValue = (
    handleChangeCounterValue: (newValue: number) => void,
    start: number,
    target: number,
    duration: number
) => {
    const startTimestamp = new Date().getTime();

    let currentValue = 0;

    const requestNextCount = () => {
        handleChangeCounterValue(Math.ceil(easeOutQuart(currentValue) * (target - start) + start));

        if (currentValue === 1) return;

        window.requestAnimationFrame(() => {
            const currentTimestamp = new Date().getTime();

            currentValue = Math.min((currentTimestamp - startTimestamp) / duration, 1);

            requestNextCount();
        });
    };

    requestNextCount();
};
