const Page = () => {
  const fullTime = new Intl.DateTimeFormat('pt-BR', {
    timeStyle: 'short',
    hour12: false
  }).format()

  let hours = new Date().getHours()
  let message = ''

  if(hours >= 0 && hours < 12) {
    message = 'Bom dia'
  } else if (hours >= 12 && hours <= 18) {
    message = 'Boa tarde'
  } else {
    message = 'Boa noite'
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <p className="text-9xl">{fullTime}</p>
      <p className="text-5xl">{message}</p>
    </div>
  )
}

export default Page