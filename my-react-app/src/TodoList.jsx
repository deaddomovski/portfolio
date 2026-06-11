import { useEffect, useState} from "react";

function TodoList() {
    const [tasks, setTasks] = useState(['Learning React','Make project', 'Push on GitHub'])
    const [newTask, setNewTask] = useState('')

    function AddTask(){
            setTasks([ ...tasks , newTask])
            setNewTask('')
    }
    return (
        <div>
            <input 
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
            <button onClick={AddTask}>Add new task</button>
        </div>
    )
}

export default TodoList