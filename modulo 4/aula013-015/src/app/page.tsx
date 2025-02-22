"use client"

import { Header } from "@/components/Header"
import { ContadorProvider } from "@/contexts/ContextoContagem"

const Page = () => {

  return(
    <div className="container mx-auto">

      <ContadorProvider>
        <Header/>
      </ContadorProvider>

    </div>
  )  
}

export default Page