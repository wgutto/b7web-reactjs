"use client"

import { Header } from "@/components/Header"
import { LoggedUserProvider } from "@/contexts/LoggedUsersContext"

const Page = () => {
  return (
    <div>
      <LoggedUserProvider>
        <Header/>
      </LoggedUserProvider>
    </div>
  )
}

export default Page