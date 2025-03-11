import { createContext, ReactNode, useReducer } from "react";
import { chatType } from "../types/chatType";
import { chatReducer } from "../reducers/chatReducer";

type ChatContextType = {
    chat: chatType[]
    addMessage: (user: string, message: string) => void
    removeMessage: (id: number) => void
}
export const ChatContext = createContext<ChatContextType | null>(null)

type Props = {
    children: ReactNode
}
export const ChatContextProvider = ({children}: Props) => {
    const [chat, dispatch] = useReducer(chatReducer, [])

    const addMessage = (user: string, message: string) => {
        dispatch({
            type: 'add',
            payload: {
                user: user,
                message: message
            }
        })
    }

    const removeMessage = (id: number) => {
        dispatch({
            type: 'remove',
            payload: {
                id: id
            }
        })
    }
    return (
        <ChatContext.Provider value={{chat, addMessage, removeMessage}}>
            {children}
        </ChatContext.Provider>
    )
}