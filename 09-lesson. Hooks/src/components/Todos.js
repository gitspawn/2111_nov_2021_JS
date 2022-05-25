import React, { useReducer, useState, useMemo } from "react";
import shortid from "shortid";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4,
    },
    wordsPerSentence: {
        max: 16,
        min: 4,
    },
});

let todosReducer = (state, action) => {
    console.log("action.type", action.type);

    switch (action.type) {
        case "addTodo": {
            return [...state, action.payload.todo];
        }

        case "removeTodo": {
            return state.filter((todo) => todo.id !== action.payload.todoID);
        }

        default:
            return state;
    }
};

export default function Todos() {
    // const [todos, setToDos] = useState([]);

    const [todos, dispatch] = useReducer(todosReducer, []);

    // console.log("todos", todos);

    const addTodo = () => {
        const todo = {
            id: shortid.generate(),
            text: lorem.generateWords(3),
        };

        dispatch({ type: "addTodo", payload: { todo } });
        // setToDos((prevTodos) => {
        //     return [...prevTodos, todo];
        // });
    };

    // this.setState((prevSatate, prevProps)=>{})

    const removeTodo = (todoID) => {
        dispatch({ type: "removeTodo", payload: { todoID } });
        // setToDos(todos.filter((todo) => todo.id !== todoID));
    };

    let [filter, setFilter] = useState("");

    const changeFilter = (event) => {
        console.log(event.target.value);
        setFilter((filter = event.target.value));
    };

    const filteredTodos = useMemo(() => {
        let data = todos.filter((todo) => todo.text.includes(filter));
        return data;
    }, [todos, filter]);
    // const filteredTodos = todos.filter((todo) => todo.text.includes(filter));

    return (
        <>
            <input type="text" onChange={changeFilter} value={filter} />

            <br />
            <button onClick={addTodo}>Add todo</button>

            <ul>
                {filteredTodos.map((todo) => (
                    <li key={todo.id}>
                        <span>{todo.text}</span>
                        <button onClick={() => removeTodo(todo.id)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

// HOOKS WRON WAY =============================
// import React, { useState } from "react";
// import shortid from "shortid";
// import { LoremIpsum } from "lorem-ipsum";

// const lorem = new LoremIpsum({
//     sentencesPerParagraph: {
//         max: 8,
//         min: 4,
//     },
//     wordsPerSentence: {
//         max: 16,
//         min: 4,
//     },
// });

// export default function Todos() {
//     const [todos, setToDos] = useState([]);

//     const addTodo = () => {
//         const todo = {
//             id: shortid.generate(),
//             text: lorem.generateWords(3),
//         };

//         setToDos((prevTodos) => {
//             return [...prevTodos, todo];
//         });
//     };

//     // this.setState((prevSatate, prevProps)=>{})

//     const removeTodo = (todoID) => {
//         setToDos(todos.filter((todo) => todo.id !== todoID));
//     };

//     let [filter, setFilter] = useState("");

//     const changeFilter = (event) => {
//         console.log(event.target.value);
//         setFilter((filter = event.target.value));
//     };

//     const filteredTodos = todos.filter((todo) => todo.text.includes(filter));

//     return (
//         <>
//             <input type="text" onChange={changeFilter} value={filter} />

//             <br />
//             <button onClick={addTodo}>Add todo</button>

//             <ul>
//                 {filteredTodos.map((todo) => (
//                     <li key={todo.id}>
//                         <span>{todo.text}</span>
//                         <button onClick={() => removeTodo(todo.id)}>
//                             Remove
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </>
//     );
// }

// import React, { Component } from "react";
// import shortid from "shortid";
// import { LoremIpsum } from "lorem-ipsum";

// const lorem = new LoremIpsum({
//     sentencesPerParagraph: {
//         max: 8,
//         min: 4,
//     },
//     wordsPerSentence: {
//         max: 16,
//         min: 4,
//     },
// });

// export default class Todos extends Component {
//     state = {
//         todos: [],
//         filter: "",
//     };

//     addTodo = () => {
//         const todo = {
//             id: shortid.generate(),
//             text: lorem.generateWords(3),
//         };

//         this.setState((state) => ({
//             todos: [...state.todos, todo],
//         }));
//     };

//     removeTodo = (todoId) => {
//         this.setState((state) => ({
//             todos: state.todos.filter((todo) => todo.id !== todoId),
//         }));
//     };

//     changeFilter = (evt) => {
//         this.setState({ filter: evt.target.value });
//     };

//     render() {
//         const filteredTodos = this.state.todos.filter((todo) =>
//             todo.text.includes(this.state.filter)
//         );

//         return (
//             <>
//                 <input
//                     type="text"
//                     onChange={this.changeFilter}
//                     value={this.state.filter}
//                 />

//                 <br />
//                 <button onClick={this.addTodo}>Add todo</button>

//                 <ul>
//                     {this.state.todos.map((todo) => (
//                         <li key={todo.id}>
//                             <span>{todo.text}</span>
//                             <button onClick={() => this.removeTodo(todo.id)}>
//                                 Remove
//                             </button>
//                         </li>
//                     ))}
//                 </ul>
//             </>
//         );
//     }
// }
