import { useState, useEffect } from 'react';

type PromiseAnyReturn = () => Promise<any>;

type MultipleFunction = Function | PromiseAnyReturn;

type QueryReturn<T> = [Array<T>, boolean, string];

function useQuery<T>(dependency: Array<any>, fn: MultipleFunction): QueryReturn<T> {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Array<T>>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fn();
        setData(response);
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
