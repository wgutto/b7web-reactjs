type Props = {
    label: string
    onClick: () => void
}

export const CustomButton = ({label, onClick}: Props) => {
    const handleClickButton = () => {
        onClick()
        alert('roooodollflo')
    }

    return (
        <div>
            <button onClick={handleClickButton} className="py-2 px-4 bg-blue-700">{label}</button>
        </div>
    )
}