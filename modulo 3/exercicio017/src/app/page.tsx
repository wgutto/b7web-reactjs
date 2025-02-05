"use client"

import { photoList } from "@/data/photoList"


const Page = () => {

  return (
    <div className="w-screen h-screen p-4">
      <h1 className="text-4xl font-bold text-center">Galeria de Fotos</h1>
      <section className="container mx-auto">
        {photoList.map(item => (
          <div>;..</div>
        ))}
      </section>
    </div>
  )
}

export default Page