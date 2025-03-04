import { ReactNode } from "react"

type Props = {
    children: ReactNode
}
export const Container = ({children}: Props) => {
    return (
        <div className="w-screen h-screen 
        
        bg-black text-white
        dark:bg-white dark:text-black
        
        ">
        <div className="container mx-auto">
                {children}
        </div>
        </div>
    )
}