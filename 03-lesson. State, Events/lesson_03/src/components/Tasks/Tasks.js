import React, { Component } from 'react';

import createTask from '../../utils/create-task';

import TaskList from './TaskList';
import TaskEditor from './TaskEditor';

export default class Tasks extends Component {
    state = {
        tasks: [],
    };

    handleAddTask = () => {
        let newTask = createTask();
        this.setState((prevState, props) => {
            return {
                tasks: [...prevState.tasks, newTask],
            };
        });
    };

    // handleRemoveTask = taskID => {
    //     // console.log(taskID);
    //     this.setState((prevState, props) => {
    //         return {
    //             tasks: prevState.tasks.filter(task => {
    //                 return task.id !== taskID;
    //             }),
    //         };
    //     });
    // };

    handleRemoveTask = taskID => {
        // console.log(taskID);
        this.setState(prevState => ({
            tasks: prevState.tasks.filter(({ id }) => id !== taskID),
        }));
    };

    render() {
        let { tasks } = this.state;

        return (
            <>
                <TaskEditor onHandleAddTask={this.handleAddTask} />
                {tasks.length > 0 && (
                    <TaskList
                        tasks={tasks}
                        onHandleRemoveTask={this.handleRemoveTask}
                    />
                )}
            </>
        );
    }
}
