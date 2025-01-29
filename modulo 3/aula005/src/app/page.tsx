"use client"

import { useState } from "react"

const Page = () => {
  const [count, setCount] = useState(0)

  const handleClickButton = () => {
    setCount(count + 1)
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <p>{count}</p>
      <button onClick={handleClickButton} className="bg-blue-700 py-2 px-4 rounded-md">+1</button>
    </div>
  )
}

export default Page