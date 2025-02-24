import { PostContext } from "@/contexts/PostContext"


export const PostItem = () => {
    const postCtx = (PostContext)

    const handleRemovePost = (id: number) => {
        postCtx?.removePost(id)
    }
    return (
        <div className="w-full p-2">


            {postCtx?.posts.map(item => (
                <div key={item.id} className="my-4 bg-white rounded-md">
                    <h1 className="capitalize font-bold text-black text-xl border-b border-gray-200 p-2 ">{item.title}</h1>
                    <div className="flex justify-between">
                        <p className="capitalize text-black px-4 py-2 italic">{item.body}</p>
                        <button className="text-black font-bold text-[12px] px-2 underline" onClick={() => {handleRemovePost(item.id)}}>Remover post</button>
                    </div>
                </div>
            ))}
        </div>
    )
}