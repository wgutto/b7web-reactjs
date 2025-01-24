const getWeekDay = () => {
    return new Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(new Date())
}

export const Person = () => {
    const data = {
        name: 'elon musk',
        avatar: 'https://w7.pngwing.com/pngs/484/293/png-transparent-elon-musk.png'
    }

    return (
        <div>
            <h1 className="font-bold capitalize">{data.name} - {getWeekDay()}</h1>
            <img className="w-44 h-44 rounded-md" src={data.avatar} alt="Foto homem" />

            <ul className="p-2 ml-4 list-disc">
                <li>CEO Tesla</li>
                <li>CEO SpaceX</li>
            </ul>
        </div>
    )
}