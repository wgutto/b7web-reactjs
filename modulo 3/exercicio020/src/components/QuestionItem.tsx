import { questionType } from "@/types/questionType"

type Props = {
    question: questionType
    count: number
    onAnswer: () => void
}

export const QuestionItem = ({question, count, onAnswer}: Props) => {
    return (
        <div>
            <div className="text-2xl font-bold text-gray-900 pt-4 pl-4">{count}. {question.question}</div>

            <div className="m-4">
                {question.options.map((item, index) => (
                    <div className="text-md font-semibold capitalize text-gray-900 border border-gray-300 py-2 px-3 cursor-pointer mb-4 rounded-md bg-blue-200 hover:bg-blue-100" key={index}>{item}</div>
                ))}
            </div>
        </div>
    )
}