import React from 'react';

export default function FilterTasksForm({ value, onChangeFilter }) {
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

// event => cllb(event.target.value);
