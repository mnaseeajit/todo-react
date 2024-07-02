import { ADD_TASK, DELETE_TASK, TOGGLE_TASK, EDIT_TASK } from "./action";

const initialState = {
    tasks : [],
};

let nextTaskId = 0;

const reducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_TASK:
            return {
                ...state,
                tasks:[
                    ...state.tasks,
                    {
                        id: nextTaskId++,
                        text: action.payload.text,
                        priority: action.payload.priority,
                        date: action.payload.date,
                        completed: false,
                    },
                ],
            };

        case DELETE_TASK: 
            return {
                ...state,
                tasks : state.tasks.filter((task) => task.id !== action.payload),
            };
        
        case TOGGLE_TASK: 
        return {
            ...state,
            tasks : state.tasks.map((task) => 
            task.id === action.payload ? {...task, completed: !task.completed}: task
            ),
        };

        case EDIT_TASK:
            return {
                ...state,
                task: state.tasks.map((task) => 
                task.id === action.payload ? {...task, task: action.payload.newText}: task
                ),
            };
        default:
            return state;
    }
}

export default reducer;