import { useContext } from "react"
import { ChatContext } from "../contexts/ChatContext"
import { UserContext } from "../contexts/UserContext"

export const ChatField = () => {
    const chatCtx = useContext(ChatContext)
    const userCtx = useContext(UserContext)

    const handleRemoveButton = (item: number) => {
        chatCtx?.removeMessage(item)
    }
    return (
        <div className="flex flex-col gap-2">
            {chatCtx?.chat.map(item => (
                <div key={item.id}
                    className={`border border-white/30 rounded-md p-2
                        
                        ${item.user === userCtx?.user ? 'self-start bg-green-500' : 'self-end bg-red-500'}

                        `}
                >
                    <h1 className="font-bold">{item.user}</h1>
                    <p className="text-sm">{item.message} <button className="text-[10px] underline cursor-pointer" onClick={() => handleRemoveButton(item.id)}>deletar</button></p>
                </div>
            ))}
        </div>
    )
}