import { createContext, ReactNode, useReducer } from "react";
import { chatType } from "../types/chatType";
import { chatReducer } from "../reducers/chatReducer";

type ChatContextType = {
    chat: chatType[]
    addMessage: (user: string, message: string) => void
    removeMessage: (id: number) => void
    editMessage: (id: number) => void
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

    const editMessage = (id: number) => {
        const item = chat.find(item => item.id === id)
        if(!item) return false

        const newMessage = window.prompt('Editar mensagem', item.message)

        if(!newMessage || newMessage.trim() === '') return false

        dispatch({
            type: "edit",
            payload: {
                id: id,
                newMessage: newMessage
            }
        })
    }

    return (
        <ChatContext.Provider value={{chat, addMessage, removeMessage, editMessage}}>
            {children}
        </ChatContext.Provider>
    )
}