import React, { Component } from 'react';
import { connect } from 'react-redux';
import actionTypes from '../../../redux/tasks/tasksActions';

class TaskEditor extends Component {
    state = {
        text: '',
    };

    handleChange = event => {
        this.setState({
            text: event.target.value,
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        this.props.onAddTask(this.state.text);

        this.setState({ text: '' });
    };

    render() {
        const { text } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Enter to add task
                    <input
                        type="text"
                        value={text}
                        onChange={this.handleChange}
                    />
                </label>

                <button type="submit">Add Task</button>
            </form>
        );
    }
}

let mapDispatchToProps = {
    onAddTask: actionTypes.addTask,
};

export default connect(null, mapDispatchToProps)(TaskEditor);
