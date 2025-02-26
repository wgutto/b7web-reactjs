import { usePost } from "@/contexts/PostContext"
import { useState } from "react"

export const Header = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const postCtx = usePost()

    const handleAddButton = () => {
        if(title && body) {
            postCtx?.addPost(title, body)
        } else {
            alert('Preencha todos os campos.')
        }

        setTitle('')
        setBody('')
    }
    return (
        <div className="w-full max-w-xl">
            <p className="text-center">Lista de posts</p>

            <div className="flex flex-col border border-dotted p-2 gap-2 w-full">
                <input type="text" placeholder="Título" value={title} onChange={e => setTitle(e.target.value)}
                className="rounded-md pl-2 h-12 text-black text-xl placeholder:text-[16px]"
                />

                <input type="text" placeholder="Matéria" value={body} onChange={e => setBody(e.target.value)} 
                className="rounded-md pl-2 h-12 text-black text-xl placeholder:text-[16px]"
                />

                <button onClick={handleAddButton} className="bg-blue-600 p-2 rounded-md font-bold hover:bg-blue-700">Adicionar</button>
            </div>
        </div>
    )
}