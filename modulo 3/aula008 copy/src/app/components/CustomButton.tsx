"use client"

import { useState } from "react"

export const CustomButton = () => {
    const [nameInput, setNameInput] = useState('')

    const handleButtonClick = () => {
        alert('oi')
    }

    return (
        <div className="flex flex-col gap-4">
            <p>Seu nome é: {nameInput.toUpperCase()}</p>

            <input type="text" className="text-black p-3 rounded-md" value={nameInput} onChange={e => setNameInput(e.target.value)} />

            <button onClick={handleButtonClick}>Mostar valor</button>
        </div>
    )
}