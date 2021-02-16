import React, {useState} from "react";
import "./todoapp.css"

function TodoApp() {

    const [task, setTask] = useState("");
    const handleChange = (e) => {
        setTask(e.target.value)
    }
    const [taskList, setTaskList] = useState([])
    const addTask = () => {
        if (task !== "") {
            const taskDetails = {
                id: Math.floor(Math.random() * 1000),
                value: task,
                isCompleted: false
            }
            setTaskList([...taskList, taskDetails])
        }
    }


    // const handleList = () => taskList !== [] ? taskList.map(t => "<li>" + t.value + "</li>") : null

    // console.log("taskList", taskList);
    // const list = taskList ? taskList.map(t => "<li className='listitem'>" + t.value + "</li>") : null

    const makeList = () => taskList !== [] ?
        <ul>
            {taskList.map(t => <li className="listitem">{t.value}
                <button className="delete">Delete</button>
                <button className="completed">Completed</button>
            </li>)}
        </ul>
        : null;

    return (
        <div className="todo">
            <input onChange={(e) => handleChange(e)} type="text" name="text" id="text"
                   placeholder="Add task here..."/>
            <button className="add-btn" onClick={addTask}>Add</button>
            {makeList()}
        </div>
    )
}

export default TodoApp