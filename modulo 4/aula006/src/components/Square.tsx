import { useEffect } from "react"

export const Square = () => {

    useEffect(() => {
        console.log('Rodou o Effect')
        
        
        return () => {
            console.log('Rodou o ClenUp')
        }
    })

    return (
        <div className="w-24 h-24 bg-blue-500">

        </div>
    )
}