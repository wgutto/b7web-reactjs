import { postReducer } from "@/reducers/postReducer"
import { postType } from "@/types/postType"
import { createContext, ReactNode, useContext, useEffect, useReducer, useState } from "react"

const STORAGE_KEY = 'postContextContent'

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
    const [isMounted, setIsMounted] = useState(false)
    const [posts, dispatch] = useReducer(postReducer, 

        typeof window !== 'undefined' ? JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]' ) : []

    )

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

    // Armazenando coisas do post localmente, como se fosse cookies
    useEffect(() => {
        setIsMounted(true)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(posts))
    }, [posts])

    if(!isMounted) {
        return null
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