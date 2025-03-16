"use client"

import { useEffect, useState } from "react"
import { userType } from "../types/userType"
import { User } from "../components/User"

const Page = () => {
  const [users, setUsers] = useState<userType[]>([])

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) =>  res.json())
      .then(json => {
        setUsers(json)
      })

  }, [])

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl">Bem vindo a floresta</h1>
      <User user={users}/>
    </div>
  )
}

export default Page