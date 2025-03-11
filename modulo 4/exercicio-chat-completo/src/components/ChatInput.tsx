import { KeyboardEvent, useContext, useState } from "react"
import { ChatContext } from "../contexts/ChatContext"

type Props = {
    user: string
}
export const ChatInput = ({user}: Props) => {
    const [textInput, setTextInput] = useState('')
    const chatCtx = useContext(ChatContext)

    const handleKeyUpAction = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key.toLowerCase() === 'enter') {
            if(textInput.trim() !== '') {
                chatCtx?.addMessage(user, textInput)
                setTextInput('')
            }
        }
    }
    return (
        <input
            className="w-full outline-none"
            placeholder={`${user}, digite uma mensagem e aperte "Enter"`}
            value={textInput}
            onChange={e => setTextInput(e.target.value)}
            onKeyUp={handleKeyUpAction} 
        />
    )
}