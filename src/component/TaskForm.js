import { useDispatch } from "react-redux";
import { addTask } from "../redux/action";
import React, {useState} from "react";

const TaskForm = () => {
    const[taskName, settaskName] = useState("");
    const [priority, setPriority] = useState('Choose Priority');
    const [date, setDate] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(taskName && priority !== 'choose Priority' && date){
            dispatch(addTask({text: taskName , priority , date}));
            settaskName('');
            setPriority('choose Priority');
            setDate('');
        }
    };

    return (
        <form onSubmit={handleSubmit} id="taskFrom">
           <input 
              id="taskName"
              type="text"
              value={taskName}
              onChange={(e) => settaskName(e.target.value)}
              placeholder="Enter your to-do List Task"
              required
            />
            <input
               id="date"
               type="date"
               value={date}
               onChange={(e)=> setDate(e.target.value)}
               required
            />
            <select
               id="selection"
               value={priority}
               onChange={(e)=> setPriority(e.target.value)}
               required
            >
                <option>Choose priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <button type="submit" className="centered-button">
                <span className="button-text">Add</span>
                <span className="material-symbols-outlined plus">
                   add_circle
                </span>
            </button>
        </form>
    )
}

export default TaskForm;