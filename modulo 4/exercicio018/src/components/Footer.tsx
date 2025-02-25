import { PostContext } from "@/contexts/PostContext"
import { useContext } from "react"

export const Footer = () => {
    const postCtx = useContext(PostContext)
    return (
        <div>
            <p>Quantidade de posts: {postCtx?.posts.length}</p>
        </div>
    )
}