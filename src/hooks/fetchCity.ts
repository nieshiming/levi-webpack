import { useState, useCallback } from 'react';

const useFetchCity = () => {
  const [city, setCity] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getAllCity = useCallback(async () => {
    setLoading(true);

    const res = await new Promise(resolve => {
      setTimeout(() => {
        resolve([1, 2, 3, 4]);
      }, 2000);
    });

    setCity(res);
    setLoading(false);
  }, []);

  return [loading, city, getAllCity];
};

export default useFetchCity;
