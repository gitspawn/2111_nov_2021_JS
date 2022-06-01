import React from 'react';
import tasksActions from '../../../redux/tasks/tasksActions';

import { connect } from 'react-redux';

function FilterTasksForm({ value, onChangeFilter }) {
    return (
        <label>
            Filter Tasks
            <input
                type="text"
                value={value}
                onChange={event => onChangeFilter(event.target.value)}
            />
        </label>
    );
}

let mapStateToProps = state => ({
    value: state.tasks.filter,
});

let mapDispatchToProps = {
    onChangeFilter: tasksActions.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterTasksForm);
