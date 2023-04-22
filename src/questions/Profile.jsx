import { useEffect, useState } from "react"
import { fakefetchThree } from "../api/fakefetchThree"

export function Profile({ heading, userWidht, userHeight }) {

    const [profile, setProfile] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    async function getProfile() {
        setIsLoading(true);
        const { status, data } = await fakefetchThree('https://example.com/api/user')
        if (status === 200) {
            setIsLoading(false)
            setProfile(data)
        }
    }

    useEffect(() => {
        getProfile()
    }, [])

    return (
        <section>
            <h1>{heading}</h1>
            <p>{isLoading && "Loading..."}</p>
            <img src={profile.image} alt="Profile" width={userWidht} height={userHeight}></img>
            <p>Name: {profile.name}</p>
            <p>Likes: {profile.likes}</p>
            <p>Comments: {profile.comments}</p>
        </section>
    )
}