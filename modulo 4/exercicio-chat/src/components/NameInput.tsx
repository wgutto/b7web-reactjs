import { KeyboardEvent, useContext, useState } from "react"
import { UserContext } from "../contexts/UserContext"

export const NameInput = () => {
    const [nameInput, setNameInput] = useState('')
    const [showEror, setShowError] = useState(false)
    const userCtx = useContext(UserContext)

    const handleKeyUpAction = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.code.toLowerCase() === 'enter') {
            if(nameInput.trim() !== '') {
                userCtx?.setUser(nameInput.trim())
            } else {
                setShowError(true)
            }
        }

        if(nameInput.trim() !== '') {
            setShowError(false)
        }
    }

    return (
        <div className="mt-14">

            <p className="text-xl mb-2">Qual seu nome?</p>

            <div className="flex gap-3 items-center text-lg">
                <input 
                type="text"
                className="flex-1 border border-white/30 rounded-md py-3 px-4 text-white bg-white/10 outline-none"
                value={nameInput}
                onChange={e => setNameInput(e.target.value)}
                onKeyUp={handleKeyUpAction}
                placeholder='Digite seu nome e aperte "Enter"'

                />
            </div>
            {showEror && 
            <p className="inline-block p-1 my-2 text-sm rounded-md bg-red-600">Preencha o campo primeiro.</p>
            }
        </div>
    )
}