"use client"

import { Post } from "@/types/Post"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"


const Page = () => {
  const query = useQuery({
    queryKey: ['posts'],
    queryFn: async (): Promise<Post[]> => {
      const resultado = await axios.get('https://jsonplaceholder.typicode.com/posts')
      return resultado.data
    }
  })
  return (
    <div className="conatiner mx-auto">
      <h1>Olá</h1>
      {query.isLoading && 'carregando...'}

      {query.data &&
        <ul>
          {query.data.map(item => (
            <ul key={item.id}>{item.title}</ul>
          ))}
        </ul>
      }
    </div>
  )
}

export default Page 