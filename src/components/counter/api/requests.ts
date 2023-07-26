import axios from 'axios';

export const getCounterValue = async (): Promise<number | undefined> => {
    const { data } = await axios.post(
        'https://europe-west2-litterlotto.cloudfunctions.net/public/entries/entries',
        {},
        {
            headers: {
                api_key: 'ayGNUTj4rFOKVhCuCxLJ',
            },
        }
    );
    return data.totalEntries;
};
