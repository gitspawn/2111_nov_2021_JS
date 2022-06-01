import { v4 as uuidv4 } from 'uuid';
import actionTypes from './tasksActionTypes';

let addTask = text => ({
    type: actionTypes.ADD,
    payload: {
        task: {
            id: uuidv4(),
            text,
            completed: false,
        },
    },
});

let removeTask = taskID => ({
    type: actionTypes.REMOVE,
    payload: {
        taskID,
    },
});

let toggleCompleted = taskID => ({
    type: actionTypes.TOGGLE_COMPLETED,
    payload: {
        taskID,
    },
});

let changeFilter = filter => ({
    type: actionTypes.CHANGE_FILTER,
    payload: {
        filter,
    },
});

export default {
    addTask,
    removeTask,
    toggleCompleted,
    changeFilter,
};

// let addTask = {
//     type: 'tasks-add',
//     payload: {
//         id: uuidv4(),
//         text: 'Vova',
//         completed: false,
//     },
// };
