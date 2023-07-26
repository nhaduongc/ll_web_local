export const easeOutQuart = (t: number) => {
    if (t === 1) return 1;

    return 1 - 2 ** (-10 * t);
};
