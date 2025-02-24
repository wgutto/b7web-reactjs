import { postReducer } from "@/reducers/postReducer"
import { postType } from "@/types/postType"
import { createContext, ReactNode, useReducer, useState } from "react"

type PostContextType = {
    posts: postType[]
    addPost: (title: string, body: string) => void
    removePost: (id: number) => void
    editPost: (id: number) => void
}
export const PostContext = createContext<PostContextType | null>(null)

type Props = {
    children: ReactNode
}
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