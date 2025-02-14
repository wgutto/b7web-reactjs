"use client"

import { listReducers } from "@/reducers/listReducers"
import { Item } from "@/types/Item"
import { useReducer, useState } from "react"

const Page = () => {
  // const [list, setList] = useState<Item[]>([])

  const [list, disPatch] = useReducer(listReducers, [])

  const handleClickAdd = () => {
    disPatch({
      type: "add",
      payload: {
        text: 'Olá, mundo'
      }
    })

    disPatch({
      type:"edit",
      payload: {
        id: 2,
        newText: 'Chupisco'
      }
    })

    disPatch({
      type: "remove",
      payload: {
        id: 2
      }
    })

    disPatch({
      type: "toggleDone",
      payload: {
        id: 3
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
    <div className="h-screen w-screen bg-blue-500 flex flex-col justify-center items-center">
      <div className="bg-white p-4 rounded-md">
        <h1 className="text-black font-bold text-center text-2xl mb-4">Lista de Tarefas</h1>
        <div>
          <input type="text" className="bg-gray-800 p-3 rounded-md mr-4 outline-none focus:outline-yellow-500"/>

          <button className="bg-gray-800 py-2 px-4 rounded-md font-bold">Adicionar</button>
        </div>

        <ul>
          {list.map(item => {
            <li key={item.id}>{item.text}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Page