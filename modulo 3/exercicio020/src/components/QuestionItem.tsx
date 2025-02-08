import { questionType } from "@/types/questionType"
import { useState } from "react"

type Props = {
    question: questionType
    count: number
    onAnswer: (answer: number) => void
}

export const QuestionItem = ({question, count, onAnswer}: Props) => {

    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

    const checkQuestion = (index: number) => {
        if(selectedAnswer === null) {
            setSelectedAnswer(index)
            onAnswer(index)
        }
    }

    return (
        <div>
            <div className="text-2xl font-bold text-gray-900 pt-4 pl-5">{count}. {question.question}</div>

            <div className="m-4">
                {question.options.map((item, index) => (
                    <div 
                    key={index}
                    onClick={() => checkQuestion(index)}
                    className={`capitalize text-gray-900 py-2 px-3 m-2 rounded-md border border-blue-200 bg-blue-100

                        ${selectedAnswer !== null ? 'cursor-auto' : 'cursor-pointer hover:opacity-60'}

                        ${selectedAnswer !== null && selectedAnswer === question.response && selectedAnswer === index && 'bg-green-100 border-green-200'}

                        ${selectedAnswer !== null && selectedAnswer !== question.response && selectedAnswer === index && 'bg-red-100 border-red-20'}
                        `}
                    >{item}</div>
                ))}
            </div>
        </div>
    )
}