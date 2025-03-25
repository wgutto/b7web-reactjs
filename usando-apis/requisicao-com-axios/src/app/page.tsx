"use client"

import axios from "axios"

const Page = () => {
  const handleLoadPost = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments', {
      params: {
        postId: 1
      }
    })

    console.log(response.data)
}
  return (
    <div className="container mx-auto p-2">
      
      <button className="bg-blue-500 py-2 px-3 rounded-md cursor-pointer" onClick={handleLoadPost}>Carregar post</button>
    </div>
  )
}

export default Page