"use client"

import { photoList } from "@/data/photoList"

const Page = () => {
  return (
    <div className="p-4">
      <h1>Galeria de Fotos</h1>
      <section>
        {photoList}
      </section>
    </div>
  )
}

export default Page