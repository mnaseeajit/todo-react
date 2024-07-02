import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask,toggleTask, editTask } from "../redux/action";
import img2 from "/home/manseeajit/todo-react/src/assets (1)/Clipboard.png";

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks || []);
    const dispatch = useDispatch();

    //by click on the radio button , task toggle between completed and not completed
    const handleToggle = (taskId) => {
        dispatch(toggleTask(taskId));
    }

    // by click on the delete icon task deleted
    const handleDelete = (taskId) => {
        dispatch(deleteTask(taskId));
    }

    // by click on the task text, task  editable
    const handleEdit = (taskId, newText) => {
        dispatch(editTask(taskId, newText));
    };

    return (
        <div className="task-list">
           {
            tasks.length === 0 ?(
                <div className="task-list">
                    <img src={img2} alt="img2" />
                    <div>You have no To-do Items As of now</div>
                </div>
            ) : (
                tasks.map((task) => (
                    <div key={task.id} className="current-task">
                        <div className="task-div1">
                            <span className="radio-container">
                                <input 
                                   type="checkbox"
                                   checked={task.completed}
                                   onChange={()=> handleToggle(task.id)}
                                />
                            </span>
                            <span 
                               className="task-text"
                               style={{textDecoration: task.completed ? 'line-through' : 'none'}}
                               contentEditable
                               suppressContentEditableWarning
                               onBlur={(e)=> handleEdit(task.id, e.target.textContent)}
                            >
                                {task.text}
                            </span>
                            <span
                                className="material-symbols-outlined"
                                onClick={() => handleDelete(task.id)}
                            >
                             delete
                            </span>
                            
                            
                        </div>
                        <div className="task-div2">
                            <span className="dueDate">{task.date}</span>
                           <span className="priority">{task.priority}</span>
                         </div>
                    </div>
                ))
            )
           }
        </div>
    )
}

export default TaskList;

