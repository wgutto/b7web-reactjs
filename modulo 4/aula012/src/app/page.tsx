/*
const Title = ({h1}: {h1: string}) => {
  return (
    <div>
      <h1>{h1}</h1>
    </div>
  )
}

const Subtitle = ({h2}: {h2: string}) => {
  return (
    <div>
      <h2>...</h2>
    </div>
  )
}


const Header = ({title, subtitle}: {title: string, subtitle: string}) => {
  return (
    <div>
      <Title h1={title}/>
      <Subtitle h2={subtitle}/>
    </div>
  )
}
*/

const Header = () => {
  return(
    <div>
      <Title/>
      <Subtitle />
    </div>
  )
}

const Title = () => {
  const ctx = 'Titulo'
  return (
    <div>
      <h1>{ctx}</h1>
    </div>
  )
}

const Subtitle = () => {
  return (
    <div>
      <h2>...</h2>
    </div>
  )
}



const Page = () => {

  const pageInfo = {
    title: 'Titulo',
    subtitle: 'Subtitulo'
  }

  return(
    <div>
      <Contexto pageInfo={pageInfo}>
        <Header/>  
      <Contexto/>
    </div>
  )


/*  
  return (
    <div>
      <Header title={pageInfo.title} subtitle={pageInfo.subtitle}/>
    </div>
  )
*/    
}

export default Page