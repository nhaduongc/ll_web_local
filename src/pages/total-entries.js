export async function post ({ request }) {

    const requestUrl = 'https://europe-west2-litterlotto.cloudfunctions.net/public/entries/entries';
    const requestHeaders = {
        api_key: "ayGNUTj4rFOKVhCuCxLJ"
    };

    const response = await fetch(requestUrl, {
        method: "POST",
        headers: requestHeaders
    });

    if(response.ok){

        const responseData = await response.json();

        return {body:JSON.stringify(responseData)};
    }

    return  {status: response.status};
}