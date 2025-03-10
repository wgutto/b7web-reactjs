"use client"

import { ChatContextProvider } from "../contexts/ChatContext"
import { UserContextProvider } from "../contexts/UserContext"

const Page = () => {
  return (
    <div className="container mx-auto max-w-lg p-4">
      <UserContextProvider>
        <ChatContextProvider>
          <h1 className="text-4xl text-center">Chat simples</h1>
        </ChatContextProvider>
      </UserContextProvider>
    </div>
  )
}

export default Page