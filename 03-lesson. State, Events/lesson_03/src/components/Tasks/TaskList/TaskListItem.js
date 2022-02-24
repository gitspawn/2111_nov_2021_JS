import React from 'react';

export default function TaskListItem({ text, onRemove }) {
    return (
        <li>
            <p>{text}</p>
            <section>
                <button onClick={onRemove} type="button">
                    Delete
                </button>
            </section>
        </li>
    );
}
