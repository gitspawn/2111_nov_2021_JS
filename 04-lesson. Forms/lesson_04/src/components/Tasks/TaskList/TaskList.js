import React from 'react';

import TaskListItem from './TaskListItem';
import './TaskList';

export default function TaskList({
    tasks,
    onHandleRemoveTask,
    onHandleUpdateTask,
}) {
    return (
        <ul>
            {tasks.map(({ id, text, completed }) => (
                <TaskListItem
                    key={id}
                    text={text}
                    onRemove={() => onHandleRemoveTask(id)}
                    onUpdate={() => onHandleUpdateTask(id)}
                />
            ))}
        </ul>
    );
}

// export default function TaskList({ tasks, onHandleRemoveTask }) {
//     return (
//         <ul>
//             {tasks.map(({ id, text, completed }) => (
//                 <li key={id}>
//                     <p>{text}</p>
//                     <section>
//                         <button
//                             onClick={() => onHandleRemoveTask(id)}
//                             type="button"
//                         >
//                             Delete
//                         </button>
//                     </section>
//                 </li>
//             ))}
//         </ul>
//     );
// }

// {
//     id: uuidv4(),
//     text: loremIpsum(),
//     completed: false,
// };
