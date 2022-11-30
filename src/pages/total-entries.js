export async function get({ request }) {

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

        return new Response(JSON.stringify(responseData), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        });

    }

    return new Response('', {
        status: response.status,
        headers: {
            "Content-Type": "application/json"
        }
    });
}