const concatString = (str: string, maxLength = 30) => {
    if (str.length <= maxLength) return str;
    const trimmedStr = str.substring(0, maxLength);
    return `${trimmedStr.replace(/[ ,.!-;:]$/, '')}…`;
};

export default concatString;
