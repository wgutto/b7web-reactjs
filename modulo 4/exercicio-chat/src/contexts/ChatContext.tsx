import { createContext, ReactNode, useReducer } from "react";
import { chatType } from "../types/chatType";
import { chatReducer } from "../reducers/chatReducer";

type ChatContextType = {
    chat: chatType[]
    addMessage: (user: string, text: string) => void
}
export const ChatContext = createContext<ChatContextType | null>(null)

type Props = {
    children: ReactNode
}
export const ChatContextProvider = ({children}: Props) => {
    const [chat, dispatch] = useReducer(chatReducer, [])

    const addMessage = (user: string, text: string) => {
        dispatch({
            type: 'add',
            payload: {
                user: user,
                text: text
            }
        })
    }

    return (
        <div>
            <ChatContext.Provider value={{chat, addMessage}}>
                {children}
            </ChatContext.Provider>
        </div>
    )
}