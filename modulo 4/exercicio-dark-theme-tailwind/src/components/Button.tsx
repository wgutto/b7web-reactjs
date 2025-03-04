import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

type Props = {
    label: string
    onClick: () => void
}
export const Button = ({label, onClick}: Props) => {
    return (
        <button onClick={onClick} className="border py-2 px-4 rounded-md font-bold 
        
        bg-black text-white
        dark:bg-white dark:text-black
        
        
        ">
            {label}
        </button>
    )
}