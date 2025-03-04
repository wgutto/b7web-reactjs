import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

export const ButtonTheme = () => {
    const themeCtx = useContext(ThemeContext)


    const handleTheme = () => {
        if(themeCtx?.theme === 'light') {
            themeCtx.setTheme('dark')
        } else {
            themeCtx?.setTheme('light')
        }
    }

    return (
        <div>
            <button onClick={handleTheme} className="fixed top-0 right-0 font-bold py-2 px-4 rounded-md 
            
            bg-white text-black 
            dark:bg-black dark:text-white
            
            ">Mudar para {themeCtx?.theme === 'dark' ? 'dark' : 'light'}</button>
        </div>
    )
}