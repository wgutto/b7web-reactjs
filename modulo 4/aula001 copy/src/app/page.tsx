"use client"

import { useEffect, useState } from "react"

const Page = () => {
  const [primeiroNome, setPrimeiroNome] = useState('Evelyy')
  const [segundoNome, setSegundoNome] = useState('Dias')
//  const [nomeCompleto, setNomeCompleto] = useState('')

// Jeito otimizado de fazer
  const nomeCompleto = `${primeiroNome} ${segundoNome}`


// Jeito não otimizado de fazer 
/* 
  useEffect(() => {
    setNomeCompleto(`${primeiroNome} ${segundoNome}`)
  }, [primeiroNome, segundoNome])
*/


  return (
    <div>
      <p>Meu nome é {nomeCompleto}</p>

      <button className="bg-blue-500 rounded-md py-2 px-4 mr-4" onClick={() => {setPrimeiroNome('Augusto')}}>Mudar primeiro nome</button>
      <button className="bg-blue-500 rounded-md py-2 px-4 mr-4" onClick={() => {setSegundoNome('Brito')}}>Mudar segundo nome</button>
    </div>
  )
}

export default Page