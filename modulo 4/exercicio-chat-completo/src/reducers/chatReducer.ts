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

type chatAction = addAction | removeAction

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
        default:
            return messages        
    }
}