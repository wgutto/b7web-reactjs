import { chatType } from "../types/chatType"

type addAction = {
    type: 'add',
    payload: {
        user: string
        text: string
    }
}

type removeAction = {
    type: 'remove',
    payload: {
        id: number
    }
}

type editAction = {
    type: 'edit',
    payload: {
        id: number,
        newText: string
    }
}

type ChatActions = addAction | removeAction | editAction
export const chatReducer = (messages: chatType[], action: ChatActions) => {

    switch(action.type) {
        case 'add':
            return [...messages, {
                id: messages.length,
                user: action.payload.user,
                text: action.payload.text
            }]
        case 'remove':
            return messages.filter(item => item.id !== action.payload.id)
        case 'edit':
                return messages.map(item => {
                    if(item.id === action.payload.id) {
                        item.text = action.payload.newText
                    }
                    return item
            })
        default: 
            return messages           
    }
}