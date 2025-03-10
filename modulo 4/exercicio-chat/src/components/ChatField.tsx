import { useContext } from "react"
import { ChatContext } from "../contexts/ChatContext"

export const ChatField = () => {
    const chatCtx = useContext(ChatContext)
    return (
        <div className="flex flex-col gap-1">
            {chatCtx?.chat.map(item => (
                <div key={item.id} 
                
                className={`border border-white/30 p-2 rounded-md
                    
                    ${item.user === 'boot' ? 'self-end' : 'self-start'}
                    
                    `}

                >
                    <h1 className="font-bold capitalize">{item.user}</h1>
                    <p className="text-sm">{item.text}</p>
                </div>
            ))}
        </div>
    )
}