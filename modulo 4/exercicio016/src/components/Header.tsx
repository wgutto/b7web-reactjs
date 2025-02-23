
import { useContext } from "react"
import { LoggedUsers } from "./LoggedUsers"
import { LoggedUsersContext } from "@/contexts/LoggedUsersContext"

export const Header = () => {
    const name = useContext(LoggedUsersContext)
    return (
        <div>
            <h1>Título da página {name?.name}</h1>

            <LoggedUsers/>
        </div>
    )
}