import { questaoType } from "@/types/questaoType"

type Props = {
    questoes: questaoType[]
    respostas: number[]
}

export const Resultados = ({questoes, respostas}: Props) => {
    return (
        <div>
            {questoes.map((item, index) => (
                <div key={index}>
                    
                    <div className="font-bold text-black">{index + 1}. {item.pergunta}</div>

                    <div className="capitalize text-black">

                        {item.resposta === respostas[index] ? 'Acertou' : 'Errou'} - {item.opcoes[item.resposta]}
                    </div>
                </div>
            ))}
        </div>
    )
}