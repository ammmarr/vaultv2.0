import { useEffect, useState } from "react";
import axios from "axios";

function useDataFetch(url: string) {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data.message);
      } catch (error: any) {
        setError(error.message); // You can customize this error handling logic
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);
  return { data, loading, error };
}

export default useDataFetch;
