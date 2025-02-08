"use client"

import { QuestaoItem } from "@/components/QuestaoItem"
import { Resultados } from "@/components/Resultados"
import { Questoes } from "@/data/Questoes"
import { useState } from "react"

const Page = () => {
  const [respostas, setRespostas] = useState<number[]>([])
  const [perguntaAtual, setPerguntaAtual] = useState(0)
  const [mostrarResultado, setMostrarResultados] = useState(false)
  const nomeQuiz = 'Quiz de FPS'

  const carregarProximaPergunta = () => {
    if(Questoes[perguntaAtual + 1]) {
      setPerguntaAtual(perguntaAtual + 1)
    } else {
      setMostrarResultados(true)
    }
  }

  const alternativaRespondida = (respostaSelecionada: number) => {
    setRespostas([...respostas, respostaSelecionada])

    carregarProximaPergunta()
  }

  const reiniciarQuiz = () => {
    setPerguntaAtual(0)
    setRespostas([])
    setMostrarResultados(false)
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-500">
      <div className="bg-white w-full max-w-lg rounded-md shadow shadow-black">
        <h1 className="text-3xl text-black font-bold py-4 px-2 border-b border-gray-300">{nomeQuiz}</h1>

        <div className="p-2">

          {!mostrarResultado &&
            <QuestaoItem
              questao={Questoes[perguntaAtual]}
              contador={perguntaAtual + 1}
              aoResponder={alternativaRespondida}
            />
          }

          {mostrarResultado && 
            <Resultados
              questoes={Questoes}
              respostas={respostas}
            />
          }
        </div>
          
          <div className="text-black text-sm font-bold text-center border-t border-gray-300 p-4">
          {!mostrarResultado &&
            `${perguntaAtual + 1} de ${Questoes.length} ${Questoes.length > 1 ? 'perguntas' : 'pergunta'}`
          }

          {mostrarResultado && 
            <button onClick={reiniciarQuiz} className="bg-blue-500 text-white py-2 px-4 rounded-md">Reinicar Quiz</button>
          }

          </div>  

        </div>
    </div>
  )
}

export default Page