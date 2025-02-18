import { Item } from "@/types/Item";

type AddAction = {
    type: 'add'
    payload: {
        text: string
    }
}

type RemoveAction = {
    type: 'remove'
    payload: {
        id: number
    }
}

type EditAction = {
    type: 'edit'
    payload: {
        id: number
        newText: string
    }
}

type ToggleDoneAction = {
    type: 'toggleDone'
    payload: {
        id: number
    }
}

type ListAction = AddAction | RemoveAction | EditAction | ToggleDoneAction

export const listReducers = (list: Item[], action: ListAction) => {
    
    switch(action.type) {
        case "add":
            return [...list, {
                id: list.length,
                text: action.payload.text,
                done: false
            }]
        case "remove":
            return list.filter(item => item.id !== action.payload.id)
        case "edit":
            return list.map(item => {
                if(item.id === action.payload.id) {
                    item.text = action.payload.newText
                }
                return item
            })
        case "toggleDone":
            return list.map(item => {
                if(item.id === action.payload.id) {
                    return {...item, done: !item.done}
                }
                return item
            })
            default: 
                return list
    }
}