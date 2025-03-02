import { createContext, ReactNode, useState } from "react"

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
    const [theme, setTheme] = useState('')
    
    return (
        <div>
            <ThemeContext.Provider value={ { theme, setTheme }}>
                {children}
            </ThemeContext.Provider>
        </div>
    )
}