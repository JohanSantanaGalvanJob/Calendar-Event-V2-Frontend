import React, { useEffect, useState } from "react";
import { API_URL } from "../../constants";

function UsersList() {
    const [users, setUsers] = useState([]);
    const [, setLoading] = useState(true);
    const [, setError] = useState(null);

    useEffect(() => {
        async function loadUsers() {
            try {

                const response = await fetch(`${API_URL}/users`);
                if (response.ok) {
                    const json = await response.json();
                    setUsers(json);
                } else {
                    throw response;
                }

            } catch (e) {
                setError("Ha ocurrido un error: ", e);
                console.log(e);
            } finally {
                setLoading(false);
            }
        }

        loadUsers();
    }, [])

    return (
        <div>
            {users.map((user) => (
                <div key={user.id} className="user-container">
                    <h2>{user.first_name} {user.last_name}</h2>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    )
}

export default UsersList;
