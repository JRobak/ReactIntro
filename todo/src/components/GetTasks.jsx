import { useState } from "react";

export const GetTasks = (props) => {
    const task = props.task
    const [taskStatus, setTaskStatus] = useState(task.status)
    const handleClick = (e) => {
        e.preventDefault()
        if (task.status === "to_do") {
            task.status = "in_progress";
        } else if (task.status === "in_progress") {
            task.status = "done";
        } else if (task.status === "done") {
            task.status = "to_do";
        }
        setTaskStatus(task.status)
    }

    return (
        <>
            <li className={task.status} onClick={handleClick}>
                {task.name}
            </li>            
        </>
    )
}