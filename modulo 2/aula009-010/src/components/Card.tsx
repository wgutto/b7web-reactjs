type Props = {
    phrase: string,
    autor?: string
}

export const Card = ({phrase, autor}: Props) => {
    return (
        <div className="border-2 border-red-500 p-4">
            <h3 className="text-center text-2xl italic">{phrase}</h3>

            <div className="flex justify-between">
                <p className="text-sm italic">Autor: {autor ?? 'desconhecido'}</p>
                {autor &&
                <p className="text-sm underline italic">Créditos</p>
                }
            </div>
        </div>
    )
}