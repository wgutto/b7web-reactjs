import { ReactNode, useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

type Props = {
    children: ReactNode
}
export const Container = ({children}: Props) => {
    const themeCtx = useContext(ThemeContext)
    return (
        <div className={`w-screen h-screen 
        
            ${themeCtx?.theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'}
        
        `}>
        <div className="container mx-auto">
                {children}
        </div>
        </div>
    )
}