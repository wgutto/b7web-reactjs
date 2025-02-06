import { photoType } from "@/types/photoType"

type Props = {
    photo: photoType
    openModal: () => void
}

export const PhotoItem = ({photo, openModal}:Props ) => {
    return (
        <div onClick={openModal} className="cursor-pointer hover:opacity-70">
            <img src={`/assets/${photo.url}`} alt="Fotos" className="w-fit md:w-[450px] md:h-[240px] rounded-md" />
        </div>
    )
}