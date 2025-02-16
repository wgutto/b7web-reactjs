"use client"

import { listReducers } from "@/reducers/listReducers"
import { useReducer, useState } from "react"

const Page = () => {
  // const [list, setList] = useState<Item[]>([])

  const [list, disPatch] = useReducer(listReducers, [])
  const [task, setTask] = useState('')

  const handleClickAdd = () => {

    if(task.trim() !== '') {
      disPatch({
        type: "add",
        payload: {
          text: task
        }
      })
    } else {
      alert('[ERRO] - Digite uma tarefa primeiro.')
    }

    setTask('')
  }

  const handleDoneCheckBox = (id: number) => {
      disPatch({
        type: "toggleDone",
        payload: {
          id: id
        }
      })
  }

  const handleRemoveClick = (id: number) => {
    disPatch({
      type: "remove",
      payload: {
        id: id
      }
    })
  }

/*  

  const addNewList = (text: string) => {
    setList([...list, {
      id: list.length,
      text,
      done: false
    }])
  }

  const editItemText = (id: number, newText: string) => {
    setList(
      list.map(text => {
        if(text.id === id) {
          text.text = newText
        } 
        return text
      })
    )
  }

  const toggleItem = (id: number) => {
    setList(
      list.map(text => {
        if(text.id === id) {
          text.done = !text.done
        }
        return text
      })
    )
  }

  const removeItem = (id: number) => {
    setList(
      list.filter(item => {
        item.id !== id
      })
    )
  }

*/  

  return (
    <div className="w-screen h-screen bg-blue-900">
      <div className="mx-auto max-w-xl bg-gray-800 p-4 rounded-md">
        <h1 className="text-yellow-500 font-bold text-center text-2xl mb-4">Lista de Tarefas</h1>
        <div className="flex">
          <input type="text" className="w-full p-3 rounded-md mr-4 border bg-gray-600 placeholder:text-white border-gray-600 outline-none" placeholder="Digite uma tarefa" value={task} onChange={(e) => {setTask(e.target.value)}}/>

          <button className="rounded-md px-4 font-bold bg-yellow-500 hover:bg-yellow-600" onClick={handleClickAdd}>Adicionar</button>
        </div>

        <ul className="py-4">
          {list.map(item => (
            <li 
            key={item.id}
            className="flex py-3 border-b border-gray-700"
            >
            
            <input type="checkbox" checked={item.done} onClick={() => handleDoneCheckBox(item.id)} />

            <p className="flex-1 pl-2 font-bold text-lg">{item.text}</p>
            
            <button className="capitalize pr-4 text-[12px] hover:underline" onClick={() => handleRemoveClick(item.id)}>remover</button>
            <button className="capitalize pr-2 text-[12px] hover:underline" >editar</button>
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default Page