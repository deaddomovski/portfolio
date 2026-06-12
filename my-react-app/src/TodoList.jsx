import { useEffect, useState, useRef } from "react";

function TodoList() {
    const [tasks, setTasks] = useState(['Learning React','Make project', 'Push on GitHub'])
    const [newTask, setNewTask] = useState('')
    const inputRef = useRef(null)

    function removeTask(indexToRemove) {
        setTasks(tasks.filter((task, index) => index !== indexToRemove))
    }

    function AddTask(){
            setTasks([ ...tasks , newTask])
            setNewTask('')
            inputRef.current.focus()
    }

    return (
        <div>
            <input 
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                ref={inputRef}
            />
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                         <button onClick={() => removeTask(index)}>Remove task</button>
                        </li>
                ))}
            </ul>
            <button onClick={AddTask}>Add new task</button>
        </div>
    )
}

export default TodoList