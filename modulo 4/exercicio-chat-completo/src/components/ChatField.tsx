import { useContext } from "react"
import { ChatContext } from "../contexts/ChatContext"
import { UserContext } from "../contexts/UserContext"

export const ChatField = () => {
    const chatCtx = useContext(ChatContext)
    const userCtx = useContext(UserContext)

    const handleRemoveButton = (item: number) => {
        chatCtx?.removeMessage(item)
    }
    const handleEditButton = (item: number) => {
        chatCtx?.editMessage(item)
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
                    <p className="text-sm">{item.message} 

                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/></svg>


                        <button className="text-[10px] underline cursor-pointer px-1" onClick={() => handleRemoveButton(item.id)}>deletar</button>
                        <button className="text-[10px] underline cursor-pointer" onClick={() => handleEditButton(item.id)}>editar</button>
                    </p>
                </div>
            ))}
        </div>
    )
}