type Props = {
    label: string
    onClick: () => void
}
export const Button = ({label, onClick}: Props) => {
    return (
        <button onClick={onClick} className="border py-2 px-4 rounded-md font-bold 
        bg-white text-black 
        dark:bg-black dark:text-white
        
        
        ">
            {label}
        </button>
    )
}