import { createContext, ReactNode } from "react";
type UserContextType = {
    user: string
    setUser: (newUser: string) => void
}
const UserContext = createContext<UserContextType | null>(null)

type Props = {
    children: ReactNode
}
export const UserContextProvider = ({children}: Props) => {
    return (
        <UserContext.Provider>
            {children}
        </UserContext.Provider>
    )
}