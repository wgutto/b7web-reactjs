import { createContext, ReactNode, useState } from "react";
import { chatType } from "../types/chatType";

type ChatContextType = {
    message: chatType[]
    setMessage: (user: string, text: string) => void
}
export const ChatContext = createContext<ChatContextType | null>(null)

type Props = {
    children: ReactNode
}
export const ChatContextProvider = ({children}: Props) => {
    const [message, setMessage] = useState()
    return (
        <div>
            <ChatContext.Provider value={{message, setMessage}}>
                {children}
            </ChatContext.Provider>
        </div>
    )
}