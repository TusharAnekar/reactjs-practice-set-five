import { useEffect, useState } from "react"
import { fakefetchFive } from "../api/fakefetchFive"

export function Chat() {

    const [chats, setChats] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    async function getChats() {
        setIsLoading(true)
        try {
            setChats({})
            const response = await fakefetchFive("https://example.com/api/userchat")
            if (response.status === 200) {
                setChats(response)
                setIsLoading(false)
            }
        } catch (error) {
            setIsLoading(false)
            setIsError(true)
            setChats(error)
        }
    }

    useEffect(() => {
        getChats()
    }, [])

    return (
        <section>
            <h1>Chats</h1>
            {isLoading && <p>Loading Chats...</p>}
            {isError && <p>{chats.message}</p>}
            <ul>
                {/*
                chats.data.map(({ name, messages }) =>
                    <li>
                        <h3>{name}'s Chat</h3>
                        <ul>
                            {
                                messages.map(({ from, message }) =>
                                    <li><span style={{ fontWeight: "bold" }}>{from}: </span>{message}</li>
                                )
                            }
                        </ul>
                    </li>
                )
                        */}
            </ul>
        </section>
    )
}