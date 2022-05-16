import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import TaskList from "./TaskList";
import TaskEditor from "./TaskEditor";
import FilterTasksForm from "./Filter/FilterTasksForm";

export default class Tasks extends Component {
    state = {
        tasks: [],
        filter: "",
    };

    componentDidMount() {
        console.log("Загрузился компонент Tasks");
        const items = localStorage.getItem("tasks");
        if (items) {
            this.setState({
                tasks: JSON.parse(items),
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("DidUpdate");
        console.log("prevState", prevState);

        if (prevState.tasks !== this.state.tasks) {
            localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
        }
    }

    handleAddTask = (textFromForm) => {
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

    handleRemoveTask = (taskID) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.filter(({ id }) => id !== taskID),
        }));
    };

    handleUpdateTask = (taskID) => {
        this.setState((prevState, props) => {
            return {
                tasks: prevState.tasks.map((task) => {
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

    handleChangeFilter = (textForFilter) => {
        this.setState({
            filter: textForFilter,
        });
    };

    getVisibleTasks = () => {
        let { tasks, filter } = this.state;
        return tasks.filter((task) => task.text.includes(filter));
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
