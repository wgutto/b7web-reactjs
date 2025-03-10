type Props = {
    user: string
}
export const ChatInput = ({user}: Props) => {
    return (
        <input
            className="w-full outline-none"
            placeholder={`${user}, digite uma mensagem e aperte "Enter"`} 
        />
    )
}