import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import { NameInput } from "./NameInput"
import { ChatInput } from "./ChatInput"

export const Chat = () => {
    const userCtx = useContext(UserContext)

    if(!userCtx) return null

    if(!userCtx.user) return <NameInput/>

    return (
        <div className="border border-white/30 rounded-md my-4">
            <div className="h-96 p-4 overflow-y-scroll">...</div>

            <div className="border-t border-white/30 p-4">
                <ChatInput user={userCtx.user.trim()}/>
            </div>

            <div className="border-t border-white/30 p-4">
            <ChatInput user="Boot"/>
            </div>
        </div>
    )
}