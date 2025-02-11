"use client"
import { VideoPlayer } from "@/components/VideoPlayer"
import { useState } from "react"

const Page = () => {
  const [Playing, setPlayig] = useState(false)

  return (
    <div>
      <div className="border p-4 text-center">
        <p className="font-bold">{Playing ? 'RODANDO' : 'PAUSADO'}</p>
        <button className="bg-blue-500 py-2 px-4 rounded-md font-bold mt-2" onClick={() => {setPlayig(!Playing)}}>{Playing ? 'Pause' : 'Play'}</button>
      </div>

      <VideoPlayer
        url="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        isPlaying={Playing}
      />
    </div>
  )
}

export default Page