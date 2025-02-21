"use client"

import { Header } from "@/components/Header"
import { ContextoContagem, ContadorInicial  } from "@/contexts/ContextoContagem"

const Page = () => {

  return(
    <div className="container mx-auto">
      <ContextoContagem.Provider value={150}>
        <Header/>
      </ContextoContagem.Provider>    
    </div>
  )  
}

export default Page