import { questaoType } from "@/types/questaoType"
import { useState } from "react"

type Props = {
    questao: questaoType
    contador: number
    aoResponder: (respostaSelecionada: number) => void
}

export const QuestaoItem = ({questao, contador, aoResponder}: Props) => {

    const [respostaSelecionada, setRespostaSelecionada] = useState<null | number>(null)

    const checarQuestao = (index: number) => {
        if(respostaSelecionada === null) {
            setRespostaSelecionada(index)


            setTimeout(() => {
                aoResponder(index)
                setRespostaSelecionada(null)
            }, 2000)
        }
    }

    return (
        <div>
            <div className="text-2xl text-black font-bold m-2">{contador}. {questao.pergunta}</div>
            <div>
                {questao.opcoes.map((item, index) => (
                    <div 
                    key={index}
                    onClick={() => checarQuestao(index)}
                    className={`capitalize text-black bg-blue-100 border border-blue-200 py-2 px-3 m-2 rounded-md

                        ${respostaSelecionada !== null ? 'cursor-auto' : 'cursor-pointer hover:opacity-70'}
                        
                        ${respostaSelecionada !== null && respostaSelecionada === questao.resposta && respostaSelecionada === index && 'bg-green-100 border-green-200'}

                        ${respostaSelecionada !== null && respostaSelecionada !== questao.resposta && respostaSelecionada === index && 'bg-red-100 border-red-200'}
                        `}
                    >{item}</div>
                ))}
            </div>
        </div>
    )
}