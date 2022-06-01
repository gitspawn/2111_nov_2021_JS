import React from 'react';

import TaskList from './TaskList';
import TaskEditor from './TaskEditor';
import FilterTasksForm from './Filter/FilterTasksForm';

export default function Tasks() {
    return (
        <>
            <TaskEditor />
            <FilterTasksForm />
            <TaskList />
        </>
    );
}
