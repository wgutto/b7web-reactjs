"use client"

import {  usePosts } from "@/utils/queries"


const Page = () => {

  const posts = usePosts()

  return (
    <div className="conatiner mx-auto">
      <h1>Olá</h1>
      {posts.isLoading && 'carregando...'}

      {posts.isFetching && 'esta recarregando'}

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