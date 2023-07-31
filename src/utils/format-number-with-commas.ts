export const formatNumberWithCommas = (num: number, zeroFillCount: number) => {
    const zeroFilledNumber = num.toString().padStart(zeroFillCount, '0');
    return zeroFilledNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
