import { Card } from "@/components/Card"

const Page = () => {
    return (
      <div>
        <h1 className="text-lg">Olá, mundo!</h1>
        <p className="text-sm">Frase qualquer</p>

        <Card>
          <div>
            <h1 className="text-3xl italic">Tudo que vai um dia volta.</h1>
            <p className="text-sm text-right underline">- Autor eu mesmo</p>
          </div>
        </Card>
      </div>
    )
}

export default Page