import { LoggedUsersContext } from "@/contexts/LoggedUsersContext"
import { useContext } from "react"

export const LoggedUsers = () => {
    const userLogged = useContext(LoggedUsersContext)

    const handleLogoutButton = () => {
        userLogged?.setName('')
    }
    return (
        <div>
            {userLogged?.name &&
                <>
                    <p>Usuário logado: {userLogged?.name}</p>
                    <button onClick={handleLogoutButton}>Sair</button>
                </>    
            }

            {!userLogged || userLogged?.name === '' &&
                <p>Usuário deslogado</p>
            }           

        </div>
    )
}