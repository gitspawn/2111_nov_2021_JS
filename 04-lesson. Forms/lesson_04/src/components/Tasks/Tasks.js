import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TaskList from './TaskList';
import TaskEditor from './TaskEditor';
import FilterTasksForm from './Filter/FilterTasksForm';

export default class Tasks extends Component {
    state = {
        tasks: [],
        filter: '',
    };

    handleAddTask = textFromForm => {
        const newTask = {
            id: uuidv4(),
            text: textFromForm,
            completed: false,
        };

        this.setState((prevState, props) => {
            return {
                tasks: [...prevState.tasks, newTask],
            };
        });
    };

    handleRemoveTask = taskID => {
        this.setState(prevState => ({
            tasks: prevState.tasks.filter(({ id }) => id !== taskID),
        }));
    };

    handleUpdateTask = taskID => {
        this.setState((prevState, props) => {
            // console.log(prevState);
            return {
                tasks: prevState.tasks.map(task => {
                    if (task.id === taskID) {
                        return {
                            ...task,
                            completed: !task.completed,
                        };
                    }

                    return task;
                }),
            };
        });
    };

    handleChangeFilter = textForFilter => {
        // console.log(textForFilter.target.value);
        // console.log(textForFilter);

        this.setState({
            filter: textForFilter,
        });
    };

    getVisibleTasks = () => {
        let { tasks, filter } = this.state;
        return tasks.filter(task => task.text.includes(filter));
    };

    render() {
        let { tasks, filter } = this.state;
        let visibleTasks = this.getVisibleTasks();

        return (
            <>
                <TaskEditor onHandleAddTask={this.handleAddTask} />

                {visibleTasks.length > 0 && (
                    <FilterTasksForm
                        value={filter}
                        onChangeFilter={this.handleChangeFilter}
                    />
                )}
                {tasks.length > 0 && (
                    <TaskList
                        // tasks={tasks}
                        tasks={visibleTasks}
                        onHandleRemoveTask={this.handleRemoveTask}
                        onHandleUpdateTask={this.handleUpdateTask}
                    />
                )}
            </>
        );
    }
}

// let vova = {
//     name: 'Vova',
//     age: 20,
//     status: "Admin"
// }

// let sara = {
//     ...vova,
//     name: 'Sara',
//     satatus: "Modedrator"
// }
