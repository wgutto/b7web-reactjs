import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

export const Header = () => {
    const themeCtx = useContext(ThemeContext)
    return (
            <div>
                <h1 className="text-3xl text-black font-bold">Titulo da página</h1>
            </div>
    )
}