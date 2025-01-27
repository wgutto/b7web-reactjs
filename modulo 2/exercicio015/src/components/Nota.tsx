type Props = {
    nota: number
}

export const Nota = ({nota}: Props) => {

    if(nota > 5) {nota = 5}
    if(nota < 0) {nota = 0}

    const notaInt = Math.floor(nota)

    const message = '⭐'.repeat(notaInt) + '❌'.repeat(5 - notaInt)

    /*
    if(Math.round(nota) == 1) {
        message = '⭐'
    } else if (nota == 2) {
        message = '⭐⭐'
    } else if (nota == 3) {
        message = '⭐⭐⭐'
    } else if (nota == 4) {
        message = '⭐⭐⭐⭐'
    } else if (nota == 5) {
        message = '⭐⭐⭐⭐⭐'
    }
    */

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <p className="bg-gray-600 py-2 px-4 rounded-md text-5xl">{nota.toFixed(1)}</p>
            <p className="text-5xl">{message}</p>
        </div>
    )
}