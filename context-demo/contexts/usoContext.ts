import { PostContext } from "@/contexts/PostContext"
import { useContext } from "react"


export const PostItem = () => {
    const postCtx = useContext(PostContext)

    const handleRemovePost = (id: number) => {
        postCtx?.removePost(id)
    }

    const handleEditPost = (id: number) => {
        postCtx?.editPost(id)
    }
    return (
        <div className="w-full p-2 p">


            {postCtx?.posts.map(item => (
                <div key={item.id} className="my-4 bg-white rounded-md">

                    <h1 className="capitalize font-bold text-black text-xl border-b border-gray-200 p-2 ">{item.title}</h1>

                    <div className="flex justify-between items-center">

                        <p className="text-black px-4 py-2 italic">{item.body}</p>

                        <div>
                            <button className="text-gray-500 font-bold text-[12px] hover:underline" onClick={() => {handleEditPost(item.id)}}>Editar post</button>

                            <button className="text-gray-500 font-bold text-[12px] pr-3 pl-4 hover:underline" onClick={() => {handleRemovePost(item.id)}}>Remover post</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}