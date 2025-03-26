"use client"

import axios from "axios"

const Page = () => {
  const enviarPost = async () => {

    const response =  await axios.post('https://jsonplaceholder.typicode.com/posts', {
      userId: 998,
      title: 'aaa',
      body: 'bbb'
    })

    console.log(response.data.title)

  }
  return (
    <div className="container mx-auto p-2">
      <button onClick={enviarPost} className="bg-blue-600 py-2 px-3 rounded-md">Enviar post</button>
    </div>
  )
}

export default Page