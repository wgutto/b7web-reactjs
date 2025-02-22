import { useContext } from "react"
import { UsuariosOnlines } from "./UsuariosOnlines"
import { ContextoContagem } from "@/contexts/ContextoContagem"

export const Header = () => {
    const contadorCtx = useContext(ContextoContagem)
    return (
        <header>
            <h1>Título da página ( {contadorCtx?.contadorOnlines} )</h1>
            <UsuariosOnlines />
        </header>
    )
}