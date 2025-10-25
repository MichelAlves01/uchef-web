import { useCallback } from "react";

function useFetch() {
  const fetchRequest = useCallback(
    async (url: string, options?: RequestInit) => {
      const response = await fetch(`http://localhost:8080${url}`, options);

      if (!response.ok) {
        throw new Error(`Fail to fetch data for URL: ${url}`);
      }

      return await response.json();
    },
    []
  );

  return fetchRequest;
}

export function useApi() {
  const fetch = useFetch();

  const get = useCallback(
    <T>(url: string): Promise<T> => {
      const options: RequestInit = {};
      return fetch(url, options) as unknown as Promise<T>;
    },
    [fetch]
  );

  return { get };
}
