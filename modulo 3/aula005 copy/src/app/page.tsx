"use client"

import { useState } from "react"

const Page = () => {

  const [showSecret, setshowSecret] = useState(false)

  const handleClickButton = () => {
    setshowSecret(!showSecret)


    // A função de cima é a mesma de baixo, só que mais simples.
    /*
    if(showSecret == true) {
      setshowSecret(false)
    } else {
      setshowSecret(true)
    }
    */
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-2">
      <button onClick={handleClickButton} className="bg-blue-700 py-2 px-4 rounded-md">{showSecret ? 'Esconder' : 'Mostrar'}</button>
      {showSecret &&
        <div className="bg-blue-700 w-28 h-28 rounded-md text-center">Quadrado secreto</div>
      }
    </div>
  )
}

export default Page