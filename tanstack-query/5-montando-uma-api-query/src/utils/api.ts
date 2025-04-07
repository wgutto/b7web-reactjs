import { Post } from "@/types/Post"
import { User } from "@/types/User"
import axios from "axios"

const req = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const getPosts = async (): Promise<Post[]> => {
    const result = await req.get('/posts')
    return result.data
}

export const getPost = async (id: number) => {
    const result = await req.get(`/posts/${id}`)
    return result.data
}

export const getUser = async (): Promise<User[]> => {
    const result = await req.get('/users')
    return result.data
}