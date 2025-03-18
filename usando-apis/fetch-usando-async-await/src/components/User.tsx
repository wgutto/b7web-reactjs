import { userType } from "../types/userType"

type Props = {
    user: userType[]
    loading: boolean
}
export const User = ({user, loading}: Props) => {

    return (
        <div>
            {loading && 'Carregando...'}
            {!loading && user.length > 0 &&
                <div>
                    {user.map(item => (
                        <ul key={item.id} className="flex gap-2">
                            <h1>Nome: {item.name}</h1>
                            <p>({item.email})</p>
                        </ul>
                    ))}
                </div>
            }
            {!loading && user.length <= 0 && 'Nenhum usuário encontrado.'}
        </div>
    )

}