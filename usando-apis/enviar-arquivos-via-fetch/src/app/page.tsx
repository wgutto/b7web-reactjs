"use client"

import { useRef, useState } from "react"

const Page = () => {
  const [legendInput, setLegendInput] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFieldSend = async () => {
    if(fileInputRef.current?.files && fileInputRef.current.files.length > 0) {
      const fileItem = fileInputRef.current.files[0]

      console.log(fileItem)
    } else {
      alert('Selecione um arquivo.')
    }
  }
  return (
    <div>
      <h1 className="text-4xl my-4">Upload de fotos</h1>

      <div className="flex flex-col gap-3 border p-2 max-w-lg">
        <input type="file" ref={fileInputRef} />
        <input type="text" placeholder="Digite a legenda" className="border border-white/40 px-3 py-2 rounded-md outline-none" value={legendInput} onChange={e => setLegendInput(e.target.value)} />
        <button className="border block" onClick={handleFieldSend}>Enviar</button>
      </div>
    </div>
  )
}

export default Page