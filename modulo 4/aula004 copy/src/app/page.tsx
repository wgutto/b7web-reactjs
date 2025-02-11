"use client"

import { Square } from "@/components/Square"
import { useState } from "react"

const Page = () => {

  const [show, setShow] = useState(false)

  return (
    <div>

      <button onClick={() => {setShow(!show)}}>{show ? 'Ocultar' : 'Mostrar'}</button>

      {show && <Square/>}
    </div>
  )
}

export default Page