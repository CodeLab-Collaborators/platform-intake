import { useState, createContext, PropsWithChildren } from 'react'
import { iGlobal, iUser, } from '../utils/interfaces'


export const GlobalContext = createContext(
    {} as iGlobal)

export const GlobalProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [actualName, setActualName] = useState<string>("")
    const [actualEmail, setActualEmail] = useState<string>("")
    const [actualPassword, setActualPassword] = useState<string>("")
    const [actualConfirm, setActualConfirm] = useState<string>("")

    const [userState, setUserState] = useState<iUser | null>({})


    return (
        <GlobalContext.Provider value={{
            actualName,
            setActualName,

            actualEmail,
            setActualEmail,

            actualPassword,
            setActualPassword,

            actualConfirm,
            setActualConfirm,

            userState,
            setUserState

        }} >{children}</GlobalContext.Provider>
    )
}

