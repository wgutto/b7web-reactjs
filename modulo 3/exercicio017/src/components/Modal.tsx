type Props = {
    image: string,
    closeModal: () => void
}

export const Modal = ({image, closeModal}:Props) => {
    return (
        <div>
            <div onClick={closeModal} className="fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center">
                <img src={`/assets/${image}`} alt="" className="max-w-screen max-h-screen" />
            </div>
            <div onClick={closeModal} className="fixed top-5 right-5 text-2xl cursor-pointer">
                X
            </div>
        </div>
    )
}