import { Cadastro } from "@/data/Cadastro"

const Page = () => {
  return (
    <div>

      {Cadastro.length > 0 &&
        <ul>
          {Cadastro.map(person => 
            <li key={person.id}>Nome: {person.name} - Profissão: {person.profession}</li>
          )}
        </ul>
      }
    </div>
  )
}

export default Page