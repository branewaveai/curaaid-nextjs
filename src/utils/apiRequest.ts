async function doPostRequest(endpoint: string, requestBody: any, headers: HeadersInit): Promise<Response> {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: JSON.stringify(requestBody),
      });
      console.log("called");
      return response;
    } catch (error) {
      console.error('Error calling API:', error);
      throw error;
    }
  }
  

  export default doPostRequest;