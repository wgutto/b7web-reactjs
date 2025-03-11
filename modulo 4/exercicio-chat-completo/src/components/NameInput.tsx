import { KeyboardEvent, useContext, useState } from "react"
import { UserContext } from "../contexts/UserContext"

export const NameInput = () => {
    const [nameInput, setNameInput] = useState('')
    const [showError, setShowError] = useState(false)
    const userCtx = useContext(UserContext)

    const handleKeyUpAction = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.code.toLowerCase() === 'enter') {
            if(nameInput.trim() !== '') {
                userCtx?.setUser(nameInput.trim())
            } else {
                setShowError(true)
            }
        }

        if(nameInput !== '') {
            setShowError(false)
        }
    }
    return (
        <div className="my-4">

            <h1 className="text-xl">Qual seu nome?</h1>

            <input
            className="border-2 border-white/30 rounded-md w-full outline-none py-3 px-4 my-2"
            placeholder='Digite o seu nome e aperte "Enter"'
            value={nameInput}
            onChange={e => setNameInput(e.target.value)}
            onKeyUp={handleKeyUpAction}
            />
            {showError && 
                <p className="text-[12px] bg-red-600 inline-block p-[2px] rounded-md">Preencha o campo.</p>
            }
        </div>
    )
}