import { useQuery } from "@tanstack/react-query"
import { getPost, getPosts } from "./api"

export const usePosts = () => {
    const query = useQuery({
        networkMode: 'always',
        queryKey: ['posts'],
        queryFn: getPosts,
        staleTime: 2 * 1000
    })
    return query
}

export const usePost = (id: number) => {
    const query = useQuery({
        queryKey: ['posts', id],
        queryFn: () => getPost(id)
    })
    return query
}