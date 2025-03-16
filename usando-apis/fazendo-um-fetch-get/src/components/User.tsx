import { userType } from "../types/userType"

type Props = {
    user: userType[]
}
export const User = ({user}: Props) => {

    return (
        <div>
            {user.length <= 0 && 'carregando...'}
            {user.length > 0 &&
                <div>
                    {user.map(item => (
                        <ul key={item.id} className="flex gap-2">
                            <h1>Nome: {item.name}</h1>
                            <p>({item.email})</p>
                        </ul>
                    ))}
                </div>
            }
        </div>
    )

}