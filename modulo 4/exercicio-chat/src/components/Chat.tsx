import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import { NameInput } from "./NameInput"

export const Chat = () => {
    const userCtx = useContext(UserContext)

    if(!userCtx) return null

    if(!userCtx.user) return <NameInput/>
    return (
        <div className="border p-2 my-4">
            ..
        </div>
    )
}