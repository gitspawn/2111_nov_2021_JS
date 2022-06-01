// let state = {
//     tasks: {
//         items: [],
//         filter: ''
//     },

import actionTypes from './tasksActionTypes';
import { combineReducers } from 'redux';

let tasksReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD:
            return [...state, action.payload.task];

        case actionTypes.REMOVE:
            return state.filter(({ id }) => id !== action.payload.taskID);

        case actionTypes.TOGGLE_COMPLETED:
            return state.map(task => {
                if (task.id === action.payload.taskID) {
                    return {
                        ...task,
                        completed: !task.completed,
                    };
                }

                return task;
            });

        default:
            return state;
    }
};

let filterReducer = (state = '', action) => {
    switch (action.type) {
        case actionTypes.CHANGE_FILTER:
            return action.payload.filter;

        default:
            return state;
    }
};

export default combineReducers({
    items: tasksReducer,
    filter: filterReducer,
});

// handleAddTask = textFromForm => {
//     const newTask = {
//         id: uuidv4(),
//         text: textFromForm,
//         completed: false,
//     };

//     this.setState((prevState, props) => {
//         return {
//             tasks: [...prevState.tasks, newTask],
//         };
//     });
// };

// handleRemoveTask = taskID => {
//     this.setState(prevState => ({
//         tasks: prevState.tasks.filter(({ id }) => id !== taskID),
//     }));
// };

// handleUpdateTask = taskID => {
//     this.setState((prevState, props) => {
//         return {
//             tasks: prevState.tasks.map(task => {
//                 if (task.id === taskID) {
//                     return {
//                         ...task,
//                         completed: !task.completed,
//                     };
//                 }

//                 return task;
//             }),
//         };
//     });
// };

// handleChangeFilter = textForFilter => {
//     // console.log(textForFilter.target.value);
//     // console.log(textForFilter);

//     this.setState({
//         filter: textForFilter,
//     });
// };

// getVisibleTasks = () => {
//     let { tasks, filter } = this.state;
//     return tasks.filter(task => task.text.includes(filter));
// };
