import { useState } from "react";

export default function TodoApp() {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        if (!task) return;
        setTodos([...todos, task]);
        setTask("");
    };

    const deleteTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h2>Todo App (Week-1 Mini Project)</h2>

            <input
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter task"
            />
            <button onClick={addTodo}>Add</button>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => deleteTodo(index)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}