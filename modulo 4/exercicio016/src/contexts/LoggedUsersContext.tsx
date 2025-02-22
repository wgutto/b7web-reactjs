import { createContext, ReactNode, useState } from "react";

type LoggedUserType = {
    userLoggedName: string
    setUserLoggedName: (user: string) => void
}
export const LoggedUsers = createContext<LoggedUserType | null>(null)

type Props = {
    children: ReactNode
}
export const LoggedUserProvider = ({children}: Props) => {
    const [userLoggedName, setUserLoggedName] = useState('Paulo')

    return (
        <LoggedUsers value={{userLoggedName, setUserLoggedName}}>
            {children}
        </LoggedUsers>
    )
}