import { ContadorInicial } from "@/contexts/ContextoContagem"
import { useContext } from "react"


export const UsuariosOnlines = () => {
    const contador = useContext(ContadorInicial)

    return (
        <p>
            Onlines: {contador}
        </p>
    )
}