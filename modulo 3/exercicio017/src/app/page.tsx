"use client"

import { Modal } from "@/components/Modal"
import { PhotoItem } from "@/components/PhotoItem"
import { photoList } from "@/data/photoList"
import { useState } from "react"

const Page = () => {

  const [showModal, setShowModal] = useState(false)
  const [imageOfModal, setImageOfModal] = useState('')

  const openModal = (id: number) => {
    const photo = photoList.find(item => item.id === id)

    console.log(id)

    if(photo) {
      setImageOfModal(photo.url)
      setShowModal(true)
    }
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className="p-4">

      <h1 className="text-3xl text-center font-bold py-6">Galeria de fotos</h1>

      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photoList.map(item => 
            <PhotoItem key={item.id} photo={item} onClick={() => openModal(item.id)}/>
          )}
      </section>

      {showModal && 
      <Modal image={imageOfModal} closeModal={closeModal}/>}
    </div>
  )
}

export default Page