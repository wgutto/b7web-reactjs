import { createContext, ReactNode, useState } from "react"

type TipoContadorContexto = {
    contadorOnlines: number
    setContadorOnline: (n: number) => void
}
export const ContextoContagem = createContext<TipoContadorContexto | null>(null)


type Props = {
    children: ReactNode
}
export const ContadorProvider = ({children}: Props) => {
    const [contadorOnlines, setContadorOnline] = useState(45)

    return (
        <ContextoContagem.Provider value={{contadorOnlines, setContadorOnline}}>
            {children}
        </ContextoContagem.Provider>
    )
}