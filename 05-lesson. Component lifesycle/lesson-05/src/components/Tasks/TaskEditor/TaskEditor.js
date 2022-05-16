import React, { Component } from 'react';

export default class TaskEditor extends Component {
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
        // console.log(this.props);
        this.props.onHandleAddTask(this.state.text);

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

// import React from 'react';

// export default function TaskEditor({ onHandleAddTask }) {
//     return (
//         <div>
//             <button onClick={onHandleAddTask} type="button">
//                 Add Task
//             </button>
//         </div>
//     );
// }
