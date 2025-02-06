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

    if(photo) {
      setImageOfModal(photo.url)
      setShowModal(true)
    }
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h1 className="text-center text-3xl font-bold py-10">Galeria de Fotos</h1>
      <section className="container grid md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-8">
        {photoList.map(item => (
          <PhotoItem key={item.id} photo={item} openModal={() => openModal(item.id)}/>
        ))}
      </section>

      {showModal &&
        <Modal image={imageOfModal} closeModal={closeModal}/>
      }
    </div>
  )
}

export default Page