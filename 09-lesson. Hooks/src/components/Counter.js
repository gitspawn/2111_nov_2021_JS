import React, { useEffect, useState } from "react";

// React.useState

export default function Counter() {
    let [count, setCountState] = useState(0);
    // console.log(count);
    // console.log(setCountState);

    let handleIncrement = () => {
        // console.log("handleIncrement обновляем state");
        document.title = `You clicked ${count} times`;
        setCountState(count + 1);
    };

    const [text, setText] = useState("");

    const handlechange = (event) => {
        setText(event.target.value);
    };

    useEffect(() => {
        // componentDidMount
        // componentDidUpdate
        console.log("useEffect");
    }, [count]);

    return (
        <div>
            <input type="text" value={text} onChange={handlechange} />
            <p>You clicked {count} times</p>
            <button type="button" onClick={handleIncrement}>
                Increment counter
            </button>
        </div>
    );
}

// import React, { Component } from "react";

// export default class Counter extends Component {
//     state = {
//         count: 0,
//     };

//     handleIncrement = () => {
//         this.setState((state) => ({ count: state.count + 1 }));
//     };

//     componentDidMount() {
//         document.title = `You clicked ${this.state.count} times`;
//     }

//     componentDidUpdate(prevProps, prevState) {
//         if (prevState.count !== this.state.count) {
//             document.title = `You clicked ${this.state.count} times`;
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <p>You clicked {this.state.count} times</p>
//                 <button type="button" onClick={this.handleIncrement}>
//                     Increment counter
//                 </button>
//             </div>
//         );
//     }
// }
