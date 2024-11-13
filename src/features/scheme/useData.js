import { useState, useEffect } from 'react';

const useData = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
    }

    fetchData();
  }, [url]);

  return data;
};

export default useData;