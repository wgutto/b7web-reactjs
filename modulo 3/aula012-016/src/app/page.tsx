"use client"

import { TodoItem } from "@/types/TodoItem"
import { useState } from "react"

const Page = () => {

  const [list, setList] = useState<TodoItem[]>([
    {id: 1, label: 'Fazer algo', checked: false},
    {id:2, label: 'Fazer outro algo', checked: true}
  ])
  const [itemInput, setItemInput] = useState('')

  const handleAddButton = () => {
    if(itemInput == '') {
      alert('Preencha o campo.')
    } else {
    setList([
        ...list,
        {id: list.length + 1, label: itemInput, checked: false}
      ])
    }

    setItemInput('')
  }

  const deleteItem = (index: number) => {
    setList(
      list.filter(item => item.id !== index)
    )
  }

  const toggleItem = (id: number) => {
    const newList = [...list]

      for(let i in newList) {
        if(newList[i].id === id) {
          newList[i].checked = !newList[i].checked
        }
    }

    setList(newList)
  }
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <div className="flex flex-col gap-4 p-4">

        <h1 className="text-3xl text-center">Lista de Tarefas</h1>

        <div className="bg-gray-500 p-8 rounded-md">

          <input type="text" className="text-black p-2 rounded-md mr-4" placeholder="O que deseja?"
          value={itemInput}
          onChange={e => setItemInput(e.target.value)} />

          <button className="bg-gray-800 py-2 px-4 rounded-md font-bold hover:bg-gray-900" 
          onClick={handleAddButton}>Adicionar</button>

        </div>

        <p className="text-center font-semibold">{list.length} {list.length > 1 ? 'Itens' : 'Item'} na lista</p>

        {list.length > 0 &&
          <ul>
            {list.map((item) =>
              <li key={item.id} className="flex items-center gap-2 mb-1">
                <input type="checkbox" onChange={() => toggleItem(item.id)} checked={item.checked} className="w-4 h-4" />

                {item.label} - <button className="text-sm bg-red-600 px-1 rounded-sm hover:bg-red-700" onClick={() => deleteItem(item.id)}>Deletar</button>
              </li>
            )}
          </ul>
        }
      </div>
    </div>
  )
}

export default Page