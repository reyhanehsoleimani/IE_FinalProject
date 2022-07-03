// The Fetch function which we use as our API caller..
// This function is actually a wrapper for the built-in-js fetch function.
import {useEffect, useState} from "react";

type ReturnType<OT> = {
    result: OT,
    loading: false,
    error: string | undefined
} | {
    result: undefined,
    loading: true,
    error: string | undefined
}


export const useFetch = <OT extends object>(input: RequestInfo, init?: RequestInit): ReturnType<OT> => {
    const [result, setResult] = useState<OT | undefined>(undefined)
    const [error, setError] = useState<string | undefined>(undefined)
    const [loading, setLoading] = useState<boolean>(true)


    useEffect(() => {
        fetch(input, init)
            .then(data => data.json())
            .then((data: OT) => setResult(data))
            .then(() => setLoading(false))
            .catch((e) => setError(e))
    }, [])


    return {result, loading, error} as ReturnType<OT>
}