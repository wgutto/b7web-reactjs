import { postReducer } from "@/reducers/postReducer"
import { postType } from "@/types/postType"
import { createContext, ReactNode, useReducer } from "react"

// Type do Context
type PostContextType = {
    posts: postType[]
    addPost: (title: string, body: string) => void
    removePost: (id: number) => void
    editPost: (id: number) => void
}
// Criando o Context
export const PostContext = createContext<PostContextType | null>(null)


// Type do children do Provider
type Props = {
    children: ReactNode
}
// Criando o Provider que vai englobar tudo e o que será usado no Context, como reducer etc...
export const PostContextProvider = ({children}: Props) => {
    const [posts, dispatch] = useReducer(postReducer, [])
    
    return (
        <div>
            <PostContext.Provider value={ { posts, addPost, removePost, editPost }}>
                {children}
            </PostContext.Provider>
        </div>
    )
}