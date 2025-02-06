"use client"

import { QuestionItem } from "@/components/QuestionItem"
import { questions } from "@/data/questions"
import { useState } from "react"

const Page = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const nameQuiz = 'Quiz'

  const handleAnswer = () => {

  }

  return (
    <div className="w-screen h-screen bg-blue-600 flex justify-center items-center">
      <div className="w-full bg-white max-w-2xl rounded-md shadow shadow-black">
        <div className="text-gray-900 text-2xl border-b border-gray-300 font-bold p-4">{nameQuiz}</div>

        <div>
          <QuestionItem question={questions[currentQuestion]} count={currentQuestion + 1} onAnswer={handleAnswer}  />
        </div>

        <div className="text-sm text-center text-gray-900 border-t border-gray-300 font-bold p-4">{currentQuestion + 1} de {questions.length} {questions.length > 1 ? 'perguntas' : 'pergunta'}</div>
      </div>
    </div>
  )
}

export default Page