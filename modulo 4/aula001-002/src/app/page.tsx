"use client"

import { useEffect, useState } from "react"

const Page = () => {
  const [nome, setNome] = useState('Augusto')
  const [ano, setAno] = useState(0)
  useEffect(() => {
    console.log('Rodou o effect')
  }, [ano])



  return (
    <div>
      <p>Meu nome é {nome} e tenho {ano} anos.</p>

      <button className="bg-blue-500 rounded-md py-2 px-4 mr-4" onClick={() => {setNome('Evelly')}}>Mudar para Evelly</button>
      <button className="bg-blue-500 rounded-md py-2 px-4 mr-4" onClick={() => {setNome('Augusto')}}>Mudar para Augusto</button>
      <button className="bg-blue-500 rounded-md py-2 px-4 mr-4" onClick={() => {setAno(44)}}>Mudar para 44 anos</button>
      <button className="bg-blue-500 rounded-md py-2 px-4" onClick={() => {setAno(20)}}>Mudar para 20 anos</button>
    </div>
  )
}

export default Page