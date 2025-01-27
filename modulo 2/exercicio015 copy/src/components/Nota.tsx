type Props = {
    nota: number
}

export const Nota = ({nota}: Props) => {

    if(nota > 5) {nota = 5}
    if(nota < 0) {nota = 0}

    const notaInt = Math.floor(nota)

    const emojiList = ['', '🙁', '😕', '😐', '🙂', '😁']

    let assessment = `${emojiList[notaInt]}`.repeat(notaInt) + '😶'.repeat(5 - notaInt)

    /*
    switch(notaInt) {
        case 1: 
        assessment = '😣'
        break;
        case 2: 
        assessment = '🥺'
        break;
        case 3:
        assessment = '😰'
        break;
        case 4:
        assessment = '😙'
        break;
        case 5:
        assessment = '😎'
    */

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <p className="bg-gray-600 py-2 px-4 rounded-md text-5xl">{nota.toFixed(1)}</p>
            <p className="text-5xl">{assessment}</p>
        </div>
    )
}