"use client"

import { Button } from "../components/Button"
import { ButtonTheme } from "../components/ButtonTheme"
import { Container } from "../components/Container"
import { ThemeContextProvider } from "../contexts/ThemeContext"

const Page = () => {
  
  return (
    <ThemeContextProvider>
      <Container>
          <header className="py-5">
            <h1 className="text-3xl font-bold">Título da página</h1>
          </header>
          <section>
            <p className="my-5 text-lg">Conteúdo da página</p>


            <Button label="Clique aqui" onClick={() => []}/>
          </section>

          <ButtonTheme/>
      </Container>
    </ThemeContextProvider>
  )
}

export default Page