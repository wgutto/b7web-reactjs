"use client"

import { User } from "@/components/User"
import { userType } from "@/types/userType"
import { useEffect, useState } from "react"

const Page = () => {
  const [users, setUsers] = useState<userType[]>([])
  const [loading, setLoading] = useState(true)

  const getUsers = async () => {
    setLoading(true)
    try {
      setLoading(true)
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const json = await response.json()
      setUsers(json)
    } catch (error) {
      console.log(`ERROR: ${error}`)
    }
    setLoading(false)
  }

  useEffect(() => {
    getUsers()
  }, [])

  const handleAddButtom = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        title: 'Titulo de teste',
        body: 'Corpo de teste',
        userId: 99
      })
    }) 
    
    const json = await response.json()

    console.log(json)
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl">Bem vindo a floresta</h1>
      <User user={users} loading={loading}/>
      <button onClick={handleAddButtom}>Adicionar novo Post</button>
    </div>
  )
}

export default Page