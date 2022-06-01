import React from 'react';
import { connect } from 'react-redux';
import actionTypes from '../../../redux/tasks/tasksActions';

import TaskListItem from './TaskListItem';
import './TaskList';
import tasksActions from '../../../redux/tasks/tasksActions';

function TaskList({ tasks, onHandleRemoveTask, onHandleUpdateTask }) {
    return (
        <ul>
            {tasks.map(({ id, text, completed }) => (
                <TaskListItem
                    key={id}
                    text={text}
                    onRemove={() => onHandleRemoveTask(id)}
                    onUpdate={() => onHandleUpdateTask(id)}
                />
            ))}
        </ul>
    );
}

// let mapStateToProps = state => ({
//     tasks: state.tasks.items,
// });

// let mapStateToProps = state => {
//     let { items, filter } = state.tasks;
//     let visibleTasks = items.filter(task => task.text.includes(filter));

//     return {
//         tasks: visibleTasks,
//     };
// };

let mapStateToProps = state => {
    let { items, filter } = state.tasks;

    let trimedFilter = filter.trim().toLowerCase();

    let visibleTasks = items.filter(task =>
        task.text.trim().toLowerCase().includes(trimedFilter),
    );

    return {
        tasks: visibleTasks,
    };
};

let mapDispatchToProps = {
    onHandleRemoveTask: tasksActions.removeTask,
    onHandleUpdateTask: tasksActions.toggleCompleted,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
