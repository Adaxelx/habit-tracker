import { useState, useEffect } from 'react';

type PromiseAnyReturn = () => Promise<any>;

type MultipleFunction = Function | PromiseAnyReturn;

type QueryReturn<T> = [Array<T>, boolean, string];

function useQuery<T>(dependency: Array<any>, fn: MultipleFunction, key: string): QueryReturn<T> {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Array<T>>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        window.caches
          ?.open(key)
          .then((cache) => cache.keys())
          .then((requests) => {
            requests.forEach(async (request) => {
              const response = await caches.match(request);
              if (response) {
                const responseJson = await response.json();
                setData(responseJson);
              } else {
                setError('This data does not exist in your cache memory.');
              }
            });
          });
        if (navigator.onLine) {
          const response = await fn();
          setData(response);
        }
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };
    fetchData();
  }, dependency);

  return [data, loading, error];
}

export default useQuery;
