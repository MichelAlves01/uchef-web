export async function useFetch(url: string, options?: RequestInit) {
    const newUrl = new URL(url);
    const response = await fetch(newUrl, options);

    if (response.ok) {
        throw new Error(`Fail to fetch data for URL: ${url}`);
    }

    return await response.json();

}

export function useFetchGet<T>(url: string): Promise<T> {
    return useFetch(url) as Promise<T>;
}