type Props = {
    image: string
    closeModal: () => void
}

export const Modal = ({image, closeModal}: Props) => {
    return (
        <div>
            <div onClick={closeModal} className="fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center m-4 xl:m-0">
                <img src={`assets/${image}`} alt="Fotos" className="rounded-md" />
            </div>
            <div onClick={closeModal} className="fixed right-5 top-5 cursor-pointer text-sm font-bold bg-blue-600 py-2 px-4 rounded-md xl:text-lg hover:bg-blue-500">
                Fechar
            </div>
        </div>
    )
}