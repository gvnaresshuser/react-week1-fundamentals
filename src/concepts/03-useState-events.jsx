import { useState } from "react";

export default function UseStateEvents() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    return (
        <div>
            <h2>useState & Events</h2>

            <h3>Counter: {count}</h3>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>

            <hr />

            <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <p>Typed Name: {name}</p>
        </div>
    );
}