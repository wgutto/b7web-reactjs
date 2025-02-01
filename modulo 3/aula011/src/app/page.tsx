"use client"

import { nameTypes } from "@/types/namesTypes"
import { useState } from "react"

const Page = () => {

  const [fullName, setFullName] = useState<nameTypes>({name: '', lastName: ''})

  const handleClearButton = () => {
    setFullName({...fullName, name: ''})
  }

  return (
    <div className="w-screen h-screen flex flex-col gap-4 justify-center items-center">
      <input className="p-2 rounded-md text-black" type="text" placeholder="Meu nome é" 
      value={fullName.name} 
      onChange={e => setFullName({...fullName, name: e.target.value})} />

      <input className="p-2 rounded-md text-black" type="text" placeholder="Meu sobrenome é" 
      value={fullName.lastName}
      onChange={e => setFullName({...fullName, lastName: e.target.value})}
      />

      <p>Meu nome é: {`${fullName.name} ${fullName.lastName}`}</p>

      <button onClick={handleClearButton}>Limpar nome</button>
    </div>
  )
}

export default Page