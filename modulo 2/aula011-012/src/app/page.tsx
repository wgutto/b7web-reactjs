import { Cadastro } from "@/data/Cadastro"

const Page = () => {

  const devs = Cadastro.filter(person => person.profession === 'dev')

  return (
    <div>

      {Cadastro.length > 0 &&
        <ul>
          {Cadastro.map(person => 
            <li key={person.id}>Nome: {person.name} - Profissão: {person.profession}</li>
          )}
        </ul>
      }
      {devs.length > 0 && 
        <ul>
          {devs.map(person => 
            <li key={person.id}>{person.name}</li>
          )}
        </ul> 
        }
    </div>
  )
}

export default Page