"use client"

const Page = () => {
  const handleClick = () => {
    alert('oi')
  }

  const avisar = (msg: string) => {
    alert(msg)
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <button onClick={handleClick} className="bg-white p-2 text-black rounded-md">Clique aqui</button>
      <button onClick={() => {avisar('oi 2')}} className="bg-white p-2 text-black rounded-md">Clique aqui</button>
    </div>
  )
}

export default Page