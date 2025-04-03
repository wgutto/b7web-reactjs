"use client"

import { usePost, usePosts } from "@/utils/queries"


const Page = () => {

  const posts = usePosts()

  const postItem = usePost(10)

  return (
    <div className="conatiner mx-auto">
      <h1>Olá</h1>
      {posts.isLoading && 'carregando...'}

      {posts.data &&
        <ul>
          {posts.data.map(item => (
            <ul key={item.id}>{item.title}</ul>
          ))}
        </ul>
      }
    </div>
  )
}

export default Page 