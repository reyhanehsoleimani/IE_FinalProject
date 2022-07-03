import {useState} from "react";
import {range, reshape} from "../utils/idnex";


export const usePagination = (length: number, limit: number) => {
    let list = range(length)
    let pages = reshape<number>(list, limit)
    const [pageIndex, setPageIndex] = useState<number>(0)
    const currentPage = pages[pageIndex] || []

    const canGoBack = pages[pageIndex - 1] !== undefined
    const canGoForward = pages[pageIndex + 1] !== undefined
    const goBack = () => canGoBack && setPageIndex(old => old - 1)
    const goForward = () => canGoForward && setPageIndex(old => old + 1)
    return {
        index: {
            start: currentPage[0], end: currentPage[currentPage.length - 1] + 1
        }
        , go: {
            forward: goForward, back: goBack
        }, canGo: {
            back: canGoBack, forward: canGoForward
        },
        limit,
        length
    }

}