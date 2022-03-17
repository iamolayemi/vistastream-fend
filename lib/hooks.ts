import useSWR from 'swr'

export const useFetch = (url: string) => {
    const { data, error } = useSWR(url)

    return {
        result: data,
        error,
        isLoading: !error && !data
    }
}
