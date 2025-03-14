import { useContext, useState } from "react";
import { ChatContext } from "../contexts/ChatContext";
import { UserContext } from "../contexts/UserContext";

export const ChatField = () => {
    const chatCtx = useContext(ChatContext);
    const userCtx = useContext(UserContext);
    // Estado para controlar a exibição das opções
    const [showOptions, setShowOptions] = useState<number | null>(null);

    const handleRemoveButton = (item: number) => {
        chatCtx?.removeMessage(item);
    };

    const handleEditButton = (item: number) => {
        chatCtx?.editMessage(item);
    };

    const toggleOptions = (id: number) => {
        setShowOptions(prevId => (prevId === id ? null : id));
    };

    return (
        <div className="flex flex-col gap-2">
            {chatCtx?.chat.map(item => (
                <div
                    key={item.id}
                    className={`border border-white/30 rounded-md p-2 ${
                        item.user === userCtx?.user ? "self-start bg-green-500" : "self-end bg-red-500"
                    }`}
                >
                    <h1 className="font-bold">{item.user}</h1>
                    <p className="text-sm flex">
                        {item.message}
                        {/* Botão de três pontinhos */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="18px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#e3e3e3"
                            onClick={() => toggleOptions(item.id)}
                            className="cursor-pointer"
                        >
                            <path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" />
                        </svg>
                    </p>

                        {/* Opções (Excluir e Editar) */}
                        {showOptions === item.id &&
                            <div className="transition-all duration-300 ease-in-out mt-2 flex">
                                <button
                                    className="text-[10px] underline cursor-pointer px-1 block"
                                    onClick={() => handleRemoveButton(item.id)}
                                >
                                    Deletar
                                </button>
                                <button
                                    className="text-[10px] underline cursor-pointer block"
                                    onClick={() => handleEditButton(item.id)}
                                >
                                    Editar
                                </button>
                            </div>
                        }
                </div>
            ))}
        </div>
    );
};