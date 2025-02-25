import { postType } from "@/types/postType";

type addAction = {
    type: 'add',
    payload: {
        title: string
        body: string
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
        newTitle: string,
        newBody: string
    }
}

type PostActions = addAction | removeAction | editAction

export const postReducer = (post: postType[], actions: PostActions) => {

    switch(actions.type) {
        case 'add':
            return [...post, {
                id: post.length,
                title: actions.payload.title,
                body: actions.payload.body
            }]
        case 'remove':
            return post.filter(item => item.id !== actions.payload.id)
        case 'edit':
            return post.map(item => {
                if(item.id === actions.payload.id) {
                    item.title = actions.payload.newTitle
                    item.body = actions.payload.newBody
                }
                return item
            })
        default: 
            return post           
    }
}