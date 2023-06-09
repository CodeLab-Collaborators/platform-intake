import { useEffect } from "react"
import { justRun } from "../utils/APIs"


export const useEntry = () => {
    useEffect(() => {
        justRun()
    }, [])
}