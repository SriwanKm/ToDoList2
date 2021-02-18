import React, {useState, useEffect} from "react";
import "./todoapp.css"
import firebase from "../util/firebase"

function TodoApp() {

    const [task, setTask] = useState("");
    const handleChange = (e) => {
        setTask(e.target.value)
        // e.target.value = ""
    }

    const todoRef = firebase.database().ref('Tasks')


    useEffect(() => {
        todoRef.on('value', (snapshot) => {
            const todos = snapshot.val()
            const taskList = []
            for (let id in todos){
                taskList.push({id, ...todos[id]})
            }
            setTaskList(taskList)
        })
    }, [])



    const [taskList, setTaskList] = useState([])

    const addTask = () => {
        if (task !== "") {
            const taskDetails = {
                // id: Math.floor(Math.random() * 1000),
                value: task,
                isCompleted: false
            }
            setTaskList([...taskList, taskDetails])
            todoRef.push(taskDetails)

            setTask("")
        }
    }
    const deleteTask = (id) => {
        todoRef.child(id).remove()
        // setTaskList([...taskList.filter(t => t.id != id)])
    }

    const taskCompleted = (isCompleted, id) => {
        // const element = taskList.findIndex(elem => elem.id == id)
        // const newTaskList = [...taskList]
        //
        // newTaskList[element] = {
        //     ...newTaskList[element], isCompleted: !isCompleted
        // }
        // setTaskList(newTaskList)


        todoRef.child(id).update({isCompleted: !isCompleted}).then(console.log("Successfully Updated"))

    }

    const makeList = () => taskList !== [] ?
        <ul>
            {taskList.map(t =>
                <li key={t.id} className={t.isCompleted ? "crossText" : "listitem"}>
                    {t.value}
                    <button onClick={() => deleteTask(t.id)}
                            className="delete">Delete
                    </button>
                    <button onClick={() => taskCompleted(t.isCompleted, t.id)}
                            className="completed">Completed
                    </button>
                </li>)}
        </ul>
        : null;




    return (
        <div className="todo">
            <input onChange={(e) => handleChange(e)} value={task} type="text" name="text" id="text"
                   placeholder="Add task here..."/>
            <button className="add-btn" onClick={addTask}>Add</button>
            {makeList()}
        </div>
    )
}

export default TodoApp


