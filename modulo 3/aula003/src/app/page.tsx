"use client"

import { CustomButton } from "./components/CustomButton"

const Page = () => {
  const handleClick = () => {
    alert('Botão 1')
  }
  const handleClick2 = () => {
    alert('Botão 2')
  }
  const handleClick3 = () => {
    alert('Botão 3')
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <CustomButton label="Clique aqui" onClick={handleClick}/>
      <CustomButton label="Clique aqui" onClick={handleClick2}/>
      <CustomButton label="Clique aqui" onClick={handleClick3}/>
    </div>
  )
}

export default Page