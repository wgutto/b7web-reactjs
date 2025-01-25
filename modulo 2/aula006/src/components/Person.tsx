const getWeekDay = () => {
    return new Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(new Date())
}

type Props = {
    name: string,
    avatar: string,
    roles: string[]
}

export const Person = ({
    name, 
    avatar='https://media.istockphoto.com/id/1337144146/pt/vetorial/default-avatar-profile-icon-vector.jpg?s=2048x2048&w=is&k=20&c=-h5YhX1ml6ixJXjKAeX_rnh4II4Ox6tzGTm-SU6tiF4=', 
    roles}: 
    Props) => {

    return (
        <div>
            <h1 className="font-bold capitalize">{name} - {getWeekDay()}</h1>
            <img className="w-44 h-44 rounded-md" src={avatar} alt="Foto homem" />
            <ul className="p-2 ml-4 list-disc">
                {roles.map((role, index: number) => (
                    <li key={index}>{role}</li>
                ))}
            </ul>
        </div>
    )
}