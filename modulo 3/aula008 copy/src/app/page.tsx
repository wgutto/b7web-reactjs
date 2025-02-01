"use client"

import { useState } from "react"

const Page = () => {
  const [count, setCount] = useState(0)

  const handleClickButton = () => {
    setCount(count + 2)
    setCount((c) => {
      return c + 2
    })
    // a função de cima e a de baixo são as mesma coisas, só que a de baixo está simplificado pois o retorno só tem uma linha
    setCount(c => c + 2)
  }

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <p>{count}</p>
      <button className="bg-blue-500 text-center py-2 px-4 rounded-md" onClick={handleClickButton}>+6</button>
    </div>
  )
}

export default Page