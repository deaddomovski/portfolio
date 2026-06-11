import { useState} from "react";

function TodoList() {
    const [tasks, setTasks] = useState(['Learning React','Make project', 'Push on GitHub'])
    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>{task}</li>
            ))}
        </ul>
    )
}

export default TodoList