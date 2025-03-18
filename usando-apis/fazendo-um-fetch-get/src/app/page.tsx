"use client"

import { useEffect, useState } from "react"
import { userType } from "../types/userType"
import { User } from "../components/User"

const Page = () => {
  const [users, setUsers] = useState<userType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) =>  res.json())
      .then(json => {
        setUsers(json)
        setLoading(false)
      })
      .catch((error) => {
        console.log(`ERROR: ${error}`)
      })
      .finally(() => {
        setLoading(false)
      })

  }, [])

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl">Bem vindo a floresta</h1>
      <User user={users} loading={loading}/>
    </div>
  )
}

export default Page