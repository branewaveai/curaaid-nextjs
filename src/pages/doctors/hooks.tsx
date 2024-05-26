import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import doPostRequest from '../../utils/apiRequest';


type HeadersInit = Headers | string[][] | Record<string, string>;
type IdType = string | number | string[] | number[] | undefined;

const useFetchDetails = (id: IdType, headers: HeadersInit) => {
  const router = useRouter();

  const [details, setDetails] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const endpoint = '/api/details'; 
        const requestBody = { id };
        const headers = {
            "Content-Type": "application/json",
          };
          
          const response = await doPostRequest(endpoint, requestBody, headers);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setDetails(data);
      } catch (error) {
        //setError(error.message);
        setError(error instanceof Error ? error.message : String(error));
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchData();
    }

    return () => {
      
    };
  }, [id, headers]); 
  return { details, isLoading, error };
};

export default useFetchDetails;
