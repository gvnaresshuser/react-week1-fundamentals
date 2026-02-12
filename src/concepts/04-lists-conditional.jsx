import { useState } from "react";

export default function ListsConditional() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const users = ["Naresh", "Ravi", "Anu"];

    return (
        <div>
            <h2>Lists & Conditional Rendering</h2>

            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? "Logout" : "Login"}
            </button>

            {isLoggedIn && <p>Welcome back!</p>}

            <h3>User List:</h3>
            {users.map(user => (
                <p key={user}>{user}</p>
            ))}
        </div>
    );
}