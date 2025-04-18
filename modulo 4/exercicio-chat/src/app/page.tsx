"use client"

import { Chat } from "../components/Chat"
import { ChatContextProvider } from "../contexts/ChatContext"
import { UserContextProvider } from "../contexts/UserContext"


const Page = () => {
  return (
    <div className="container mx-auto max-w-lg p-4">
      <UserContextProvider>
        <ChatContextProvider>
          <h1 className="text-3xl text-center">Chat simples</h1>
          <Chat/>
        </ChatContextProvider>
      </UserContextProvider>
    </div>
  )
}
export default Page