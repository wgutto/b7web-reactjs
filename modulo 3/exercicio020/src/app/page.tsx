"use client"

import { QuestaoItem } from "@/components/QuestaoItem"
import { Questoes } from "@/data/Questoes"
import { useState } from "react"

const Page = () => {
  const [perguntaAtual, setPerguntaAtual] = useState(0)
  const nomeQuiz = 'Quiz de FPS'

  const alternativaRespondida = (respostaSelecionada: number) => {

  }

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-500">
      <div className="bg-white w-full max-w-lg rounded-md shadow shadow-black">
        <h1 className="text-3xl text-black font-bold py-4 px-2 border-b border-gray-300">{nomeQuiz}</h1>

        <div className="p-2">
          <QuestaoItem
            questao={Questoes[perguntaAtual]}
            contador={perguntaAtual + 1}
            aoResponder={alternativaRespondida}

          />
        </div>

        <div className="text-black text-sm font-bold text-center border-t border-gray-300 p-4">{perguntaAtual + 1} de {Questoes.length} {Questoes.length > 1 ? 'perguntas' : 'pergunta'}</div>
      </div>
    </div>
  )
}

export default Page