import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import { NameInput } from "./NameInput"
import { ChatInput } from "./ChatInput"
import { ChatField } from "./ChatField"

export const Chat = () => {
    const userCtx = useContext(UserContext)

    if(!userCtx) return null

    if(!userCtx.user) return <NameInput/>
    return (
        <div className="border border-white/30 my-4 rounded-md">
            <div className="h-96 p-3 overflow-y-scroll">
                <ChatField/>
            </div>

            <div className="border-t border-white/30 p-3">
                <ChatInput name={userCtx.user}/>
            </div>

            <div className="border-t border-white/30 p-3">
                <ChatInput name="boot"/>
            </div>
        </div>
    )
}