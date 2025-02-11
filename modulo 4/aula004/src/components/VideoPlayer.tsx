import { useEffect, useRef } from "react"

type Props = {
    url: string
    isPlaying: boolean
}

export const VideoPlayer = ({url, isPlaying}: Props) => {
    const videoTag = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if(isPlaying) {
            videoTag.current?.play()
        } else {
            videoTag.current?.pause()
        }
    }, [isPlaying])

    return (
        <div>
            <video ref={videoTag} src={url} loop playsInline ></video>
        </div>
    )
}