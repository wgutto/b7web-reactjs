'use client'

import { api } from "@/utils/api"
import { useRef } from "react"

const Page = () => {
  const fileInput = useRef<HTMLInputElement>(null)

  const enviarAquivo = () => {
    if(fileInput.current?.files && fileInput.current.files.length > 0) {
      const file = fileInput.current.files[0]

      const data = new FormData()
      data.append('name', 'Augusto')
      data.append('file', file)


      const response = api.post('/post', data)

      console.log(response)

    } else {
      alert('Selecione um arquivo.')
    }
  }
  return (
    <div className="container mx-auto flex flex-col border border-white/30 p-4">
      <input
        type="file"
        ref={fileInput}
        className="mb-4" // Adicionando margem para separar do botão
      />
      <button onClick={enviarAquivo} className="bg-blue-600 rounded-md py-2 px-4 self-start">Enviar arquivo</button>
    </div>
  )
}

export default Page