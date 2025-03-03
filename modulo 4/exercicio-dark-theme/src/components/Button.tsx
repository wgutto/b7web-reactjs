import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

type Props = {
    label: string
    onClick: () => void
}
export const Button = ({label, onClick}: Props) => {
    const themeCtx = useContext(ThemeContext)
    return (
        <button onClick={onClick} className={`border py-2 px-4 rounded-md font-bold
        
        ${themeCtx?.theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}
        
        `}>
            {label}
        </button>
    )
}