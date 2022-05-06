import { useEffect, useState } from "react";

const useFetch = (url, requestOptions) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url, requestOptions)
      .then((res) => {
        if (!res.ok) {
          throw Error("Error during fetching data");
        }
        return res;
      })
      .then(res => res.json())
      .then(res => setData(res)
      )
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
