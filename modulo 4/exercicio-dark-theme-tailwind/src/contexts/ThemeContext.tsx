import { createContext, ReactNode, useEffect, useState } from "react"

const STORAGE_KEY = 'themeContextKey'

// Type do Context
type ThemeContextType = {
    theme: string
    setTheme: (theme: string) => void
}
// Criando o Context
export const ThemeContext = createContext<ThemeContextType | null>(null)


// Type do children do Provider
type Props = {
    children: ReactNode
}
// Criando o Provider que vai englobar tudo e o que será usado no Context, como reducer etc...
export const ThemeContextProvider = ({children}: Props) => {
    const [isMounted, setIsMounted] = useState(false)
    const [theme, setTheme] = useState(
       typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) || 'light' : 'light'
    )

    useEffect(() => {
        setIsMounted(true)
        localStorage.setItem(STORAGE_KEY, theme)
    }, [theme])

    if(!isMounted) {
        return null
    }

    
    return (
        <div>
            <ThemeContext.Provider value={ { theme, setTheme }}>
                {children}
            </ThemeContext.Provider>
        </div>
    )
}