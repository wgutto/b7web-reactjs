import { ContextoContagem } from "@/contexts/ContextoContagem"
import { useContext } from "react"


export const UsuariosOnlines = () => {
    const contadorCtx = useContext(ContextoContagem)

    const banirTodos = () => {
        contadorCtx?.setContadorOnline(0)
    }

    return (
        <div>
            <p>
                Onlines: {contadorCtx?.contadorOnlines}
                
            </p>

            <button onClick={banirTodos}>Banir todos</button>
        </div>
    )
}