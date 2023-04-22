import { useEffect, useState } from "react"
import { fakefetchFour } from "../api/fakefetchFour"

export function UserFeed() {

    const [isBoolean, setIsBoolean] = useState({ isLoading: false, isError: false })

    const [response, setResponse] = useState({ feed: [], fetchError: {} })

    async function getFeed() {
        try {
            setIsBoolean({ isLoading: true, isError: false })
            setResponse({ ...response, feed: [] })
            const result = await fakefetchFour("https://example.com/api/users")
            if (result.status === 200) {
                setIsBoolean({ isLoading: false, isError: false })
                setResponse({ ...response, feed: result.data })
            }
        } catch (error) {
            setIsBoolean({ isLoading: false, isError: true })
            setResponse({ feed: [], fetchError: error })
        }
    }

    useEffect(() => {
        getFeed()
    }, [])

    return (
        <section>
            <h1>Users Feed</h1>
            <p>{isBoolean.isLoading && "Loading..."}</p>
            {isBoolean.isError && <p>{response.fetchError.message}</p>}
            {
                response.feed.map(({ name, image, likes, comments }) =>
                    <div>
                        <img src={image} alt="Profile" height="200px" />
                        <p>Name: {name}</p>
                        <p>Likes: {likes}</p>
                        <p>Comments: {comments}</p>
                    </div>
                )
            }
        </section>
    )
}