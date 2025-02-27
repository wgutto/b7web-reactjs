import { usePost } from "@/contexts/PostContext"

export const Footer = () => {
    const postCtx = usePost()
    return (
        <div>
            <p>Quantidade de posts: {postCtx?.posts.length}</p>
        </div>
    )
}