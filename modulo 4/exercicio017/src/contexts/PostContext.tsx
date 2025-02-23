import { postType } from "@/types/postType"
import { createContext, ReactNode, useState } from "react"

type PostContextType = {
    posts: postType[]
    addPost: (title: string, body: string) => void
    removePost: (id: number) => void
}
export const PostContext = createContext<PostContextType | null>(null)

type Props = {
    children: ReactNode
}
export const PostContextProvider = ({children}: Props) => {
    const [posts, setPosts] = useState<postType[]>([])

    const addPost = (title: string, body: string) => {
        setPosts([
            ...posts, {
                id: posts.length,
                title: title,
                body: body
            }
        ])
    }

    const removePost = (id: number) => {
        setPosts(posts.filter(post => post.id !== id))
    }

    return (
        <div>
            <PostContext.Provider value={ { posts, addPost, removePost }}>
                {children}
            </PostContext.Provider>
        </div>
    )
}