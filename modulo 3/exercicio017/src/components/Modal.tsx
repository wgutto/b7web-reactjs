import { photoType } from "@/types/photoType"

type Props = {
    image: photoType,
    closeModal: () => void
}

export const Modal = ({image, closeModal}:Props) => {
    return (
        <div className="w-screen h-screen">
            <img src={`/assets/${image.url}`} alt="" />
        </div>
    )
}