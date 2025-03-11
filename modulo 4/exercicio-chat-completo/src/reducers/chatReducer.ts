import { chatType } from "../types/chatType";

type addAction = {
    type: 'add',
    payload: {
        user: string,
        message: string
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
        newMessage: string
    }
}

type chatAction = addAction | removeAction | editAction

export const chatReducer = (messages: chatType[], actions: chatAction) => {
    switch(actions.type) {
        case 'add':
            return [...messages, {
                id: messages.length,
                user: actions.payload.user,
                message: actions.payload.message
            }]
        case 'remove':
            return messages.filter(item => item.id !== actions.payload.id)
        case 'edit':
            return messages.map(item => {
                if(item.id === actions.payload.id) {
                    item.message = actions.payload.newMessage
                }
                return item
            })    
        default:
            return messages        
    }
}