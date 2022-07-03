import {useEffect} from "react";

export const useTitle = (set: string | ((old: string) => string)) => {
    useEffect(() => {
        const title = document.getElementsByTagName("title")[0]
        title.innerText = typeof set === "string" ? set : set(title.innerText)
    }, [])
}