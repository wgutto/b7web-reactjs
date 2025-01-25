import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const Card = ({children}: Props) => {
    return (
        <div className=" bg-blue-400 p-4 text-center">
            {children}
        </div>
    )
}