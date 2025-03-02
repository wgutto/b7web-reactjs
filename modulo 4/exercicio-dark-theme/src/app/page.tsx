"use client"

import { Header } from "../components/Header"
import { ThemeContextProvider } from "../contexts/ThemeContext"

const Page = () => {
  return (
    <ThemeContextProvider>
      <div className="container mx-auto w-screen h-screen bg-white">
          <Header/>
      </div>
    </ThemeContextProvider>
  )
}

export default Page