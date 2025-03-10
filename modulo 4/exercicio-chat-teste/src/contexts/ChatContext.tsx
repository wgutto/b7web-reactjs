import { createContext, ReactNode } from "react";
import { chatType } from "../types/chatType";

type ChatContextType = {
    chat: chatType[]
    addMessage: (user: string, message: string) => void
}
const ChatContext = createContext<ChatContextType | null>(null)

type Props = {
    children: ReactNode
}
export const ChatContextProvider = ({children}: Props) => {
    return (
        <ChatContext.Provider>
            {children}
        </ChatContext.Provider>
    )
}