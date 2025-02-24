"use client"

import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { PostItem } from "@/components/PostItem"
import { PostContextProvider } from "@/contexts/PostContext"

const Page = () => {
  return (
    <PostContextProvider>
    <div className="w-screen h-screen flex flex-col items-center">
        <Header/>
        <PostItem/>
        <Footer/>
    </div>
    </PostContextProvider>
  )
}

export default Page