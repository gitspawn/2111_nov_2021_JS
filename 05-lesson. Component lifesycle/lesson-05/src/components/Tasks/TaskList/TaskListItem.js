import React from 'react';

export default function TaskListItem({ text, onRemove, competed, onUpdate }) {
    return (
        <li>
            <p>{text}</p>
            <section>
                <input type="checkbox" checked={competed} onChange={onUpdate} />
                <button onClick={onRemove} type="button">
                    Delete
                </button>
            </section>
        </li>
    );
}
