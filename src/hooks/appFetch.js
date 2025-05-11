import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          console.error("Error al obtener la respuesta");
          return;
        }

        const data = await response.json();
        if (!data || data.length === 0) {
          console.error("No hay datos disponibles");
        }

        setData(data);
      } catch (err) {
        console.error(`Error al ejecutar la función: ${err}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading };
};
