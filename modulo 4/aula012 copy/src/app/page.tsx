"use client"

import { Header } from "@/components/Header"
import { ContadorInicial, ContextoContagem } from "@/context/ContextoContagem"

const Page = () => {

  return(
    <div className="container mx-auto">
      <ContextoContagem value={ContadorInicial}>
        <Header/>
      </ContextoContagem>    
    </div>
  )  
}

export default Page