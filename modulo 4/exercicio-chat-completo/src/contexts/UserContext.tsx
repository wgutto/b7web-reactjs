import { createContext, ReactNode, useState } from "react";
type UserContextType = {
    user: string
    setUser: (newUser: string) => void
}
export const UserContext = createContext<UserContextType | null>(null)

type Props = {
    children: ReactNode
}
export const UserContextProvider = ({children}: Props) => {
    const [user, setUser] = useState('')
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}