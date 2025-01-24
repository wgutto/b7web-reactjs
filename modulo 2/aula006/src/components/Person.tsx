const getWeekDay = () => {
    return new Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(new Date())
}

type Props = {
    name: string,
    avatar: string,
    roles: string[]
}

export const Person = ({name, avatar, roles}: Props) => {

    return (
        <div>
            <h1 className="font-bold capitalize">{name} - {getWeekDay()}</h1>
            <img className="w-44 h-44 rounded-md" src={avatar} alt="Foto homem" />
            <ul className="p-2 ml-4 list-disc">
                {roles.map((role, index) => (
                    <li key={index}>{role}</li>
                ))}
            </ul>
        </div>
    )
}