import { useState } from "react";
import { fakefetchOne } from "../api/fakefetchOne"
export function Users() {

    const [temp, setUsers] = useState([])

    async function handleGetUsers() {
        try {
            const { status, data } = await fakefetchOne('https://example.com/api/users/status')
            if (status === 200) {
                setUsers(data.users)
            }

        } catch (error) {
            console.error(error)
        }
    }
    return (
        <section>
            <h1>Users:</h1>
            <button onClick={handleGetUsers}>Get Users</button>
            {
                temp.map(({ name, status }) =>
                    <li style={{ color: status === "Online" ? "green" : "red" }}>{name} {status}</li>)
            }
        </section>
    )
}