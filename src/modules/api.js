function useApi() {
  const useQuery = async (
    query,
    url = import.meta.env.GRAPHQL_ENDPOINT,
    method = 'POST',
    headers = {}
  ) => {
    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          ...headers
        },
        body: JSON.stringify({
          query: query
        }),
      })
    
      return response.json()
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  const useImage = (img) => {
    return `${import.meta.env.UPLOAD_PATH}/${img.id}`
  }

  return {
    useQuery,
    useImage
  }
}

export default useApi