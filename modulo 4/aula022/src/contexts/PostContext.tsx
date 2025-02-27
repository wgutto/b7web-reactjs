import { postReducer } from "@/reducers/postReducer"
import { postType } from "@/types/postType"
import { createContext, ReactNode, useContext, useReducer } from "react"

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

    const addPost = (title: string, body: string) => {
        dispatch({
            type: 'add',
            payload: {
                title: title,
                body: body
            }
        })
    }

    const removePost = (id: number) => {
        dispatch({
            type: 'remove',
            payload: {
                id: id
            }
        })
    }

    const editPost = (id: number) => {
        const item = posts.find(item => item.id === id)
        if(!item) return false

        const newTitle = window.prompt('Editar título', item.title)
        if(!newTitle || newTitle.trim() === '') return false
        
        const newBody = window.prompt('Editar matéria', item.body)
        if(!newBody || newBody.trim() === '') return false

        dispatch({
            type: 'edit',
            payload: {
                id: id,
                newTitle: newTitle,
                newBody: newBody
            }
        })
    }


    return (
        <div>
            <PostContext.Provider value={ { posts, addPost, removePost, editPost }}>
                {children}
            </PostContext.Provider>
        </div>
    )
}

// Criando uma função que usa o Context, e depois só precisa usar a função, importando menos coisas
export const usePost = () => {
    return useContext(PostContext)
}