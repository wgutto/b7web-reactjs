"use client"

import { api } from "@/utils/api"

const Page = () => {
  const enviarPost = async () => {

    const response = api.post('/posts', {
      userId: 998,
      title: 'aaa',
      body: 'bbb'
    })

    console.log((await response).data.title)

  }

  const carregarPost = async () => {
    const response = await api.get('/posts')

    console.log(response.data[0])

  }
  return (
    <div className="container mx-auto p-2">
      <button onClick={enviarPost} className="bg-blue-600 py-2 px-3 rounded-md">Enviar post</button>
      <button onClick={carregarPost} className="bg-blue-600 py-2 px-3 rounded-md">Carregar post</button>
    </div>
  )
}

export default Page