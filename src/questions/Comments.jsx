import { useEffect, useState } from "react"
import { fakeFetch } from "../api/fakefetchSix"

export function Comments() {

    const [commentsData, setCommentsData] = useState({})
    async function getComments() {
        try {
            const { status, data: { comments } } = await fakeFetch('https://example.com/api/comments')
            if (status === 200) {
                setCommentsData(comments)
            }
        } catch (error) {

        }

    }

    useEffect(() => {
        getComments()
    }, [])

    function handleDelete(nameToDelete) {
        setCommentsData(commentsData.filter(({ name }) => !(name === nameToDelete)))
    }

    return (
        <section>
            <h1>Comments</h1>
            {
                commentsData.map(({ name, text }) =>
                    <div>
                        <h3>{name}</h3>
                        <p>{text}</p>
                        <button onClick={() => handleDelete(name)}>Delete</button>
                    </div>
                )
            }
        </section>
    )
}