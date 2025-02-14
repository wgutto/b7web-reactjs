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
    <div>
      {list.map(item => {
        <div key={item.id}>{item.text} - {item.done}</div>
      })}

      <button onClick={handleClickAdd}>Adicionar</button>
    </div>
  )
}

export default Page