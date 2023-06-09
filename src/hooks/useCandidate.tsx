import useSWR from "swr"
import { getQuestions, viewCandidate } from "../utils/APIs"

export const useCandidate = () => {
    const { data } = useSWR("candidate", viewCandidate)

    return data?.data.data
}

export const useQuestions = () => {
    const { data } = useSWR("question", getQuestions)

    return data?.data.data
}

export const useCreateCandidate = () => {
    const { mutate } = useSWR("candidate", viewCandidate)

    return mutate
}