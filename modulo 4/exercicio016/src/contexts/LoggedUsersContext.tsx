import { createContext, ReactNode, useState } from "react";

type LoggedUserType = {
    name: string
    setName: (user: string) => void
}
export const LoggedUsersContext = createContext<LoggedUserType | null>(null)

type Props = {
    children: ReactNode
}
export const LoggedUserProvider = ({children}: Props) => {
    const [name, setName] = useState('Paulo')

    return (
        <LoggedUsersContext.Provider value={{name, setName}}>
            {children}
        </LoggedUsersContext.Provider>
    )
}