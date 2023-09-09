import { useEffect, useState, useDebugValue, useRef, useCallback } from "react";
export default function useFetch<TFetch_Type>(url: string, body: BodyInit | undefined = undefined) {
    const [numberOfRefetch, setNumberOfRefetch] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<unknown | null>(null);
    const [data, setData] = useState<TFetch_Type | null>(null);
    const controllerRef = useRef<AbortController | null>(null);
    useDebugValue([data, loading, error]);
    const refetch = () => {
        setNumberOfRefetch((prev) => prev + 1);
        fetchData(false);
    };

    const fetchData = useCallback(
        async (isCancelled: boolean) => {
            if (controllerRef.current) controllerRef.current.abort();
            const controller = new AbortController();
            controllerRef.current = controller;
            if (!url || isCancelled) return;
            setLoading(true);
            try {
                const response = await fetch(url, {
                    signal: controllerRef.current?.signal,
                    credentials: "include",
                    body
                });
                const newData = (await response.json()) as TFetch_Type;
                if (!isCancelled) {
                    setData(newData);
                    setError(null);
                    controllerRef.current = null;
                }
            } catch (e: unknown) {
                setError(e);
            }
            setLoading(false);
        },
        [body, url]
    );

    useEffect(() => {
        let isCancelled = false;
        if (url) fetchData(isCancelled);
        return () => {
            isCancelled = true;
            controllerRef.current?.abort();
        };
    }, [body, url, fetchData]);

    return { data, loading, error, refetch, refetchCount: numberOfRefetch };
}