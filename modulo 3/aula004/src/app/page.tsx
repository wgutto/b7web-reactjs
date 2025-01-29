"use client"

import { FormEvent } from "react"

const Page = () => {

  const handleFormSubit = (e: FormEvent) => {
    e.preventDefault()
    alert('mandando o formulárioznho bonitinho')
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1>Formulário de login</h1>
      <form onSubmit={handleFormSubit}>
        <input type="text" name="" id="" />    

        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default Page