import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [controller, setController] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    setController(abortController);
    setLoading(true);

    fetch(url, { signal: abortController.signal })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        if (error.name === "AbortError") {
          setError("Request cancelled");
        } else {
          setError(error);
        }
      })
      .finally(() => setLoading(false));

    /* si el componente se desmonta se aborta el fetch */
    return () => abortController.abort();
  }, []);

  /* funcion para cancelar el fetch manualmente */
  const handleCancelRequest = () => {
    if (controller) {
      controller.abort();
      setError("Request cancelled");
    }
  };

  return { data, loading, error, handleCancelRequest };
}
