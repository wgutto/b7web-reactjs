"use client"

import { Item } from "@/types/Item"
import { useState } from "react"

const Page = () => {
  const [list, setList] = useState<Item[]>([])

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

  return (
    <div>
    </div>
  )
}

export default Page