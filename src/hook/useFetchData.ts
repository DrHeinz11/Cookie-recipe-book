import { useEffect, useState } from "react";
import { mealApi } from "../services/mealApi.service";

interface FetchDataResult<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}

const useFetchData = <T>(url: string): FetchDataResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await mealApi.get(url);
        if (response.status !== 200) {
          throw new Error(`Error fetching. Status: ${response.status}`);
        } else {
          setData(response.data);
        }
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(); // Llama a la función para obtener los datos al cargar el componente
  }, [url]);

  return { data, isLoading, error };
};

export default useFetchData;
