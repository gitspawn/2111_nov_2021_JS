import React, { Component } from 'react';
import CounterControls from './CounterControls';

export default class Counter extends Component {
    state = {
        value: this.props.initialValue,
    };

    handleIncrement = event => {
        this.setState((prevState, props) => {
            return {
                value: prevState.value + props.step,
            };
        });
    };

    handleDecrement = event => {
        this.setState((prevState, props) => {
            return {
                value: prevState.value - props.step,
            };
        });
    };

    addNumber = () => {};

    render() {
        let { value } = this.state;

        return (
            <div>
                <span> {value} </span>
                <CounterControls
                    onHandleIncrement={this.handleIncrement}
                    onHandleDecrement={this.handleDecrement}
                />
            </div>
        );
    }
}

// State
// export default class Counter extends Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.props = props;

//     //     this.state = {
//     //         name: 'Vova',
//     //     };
//     // this.handleIncrement = this.handleIncrement.bind(this);
//     //     this.handleDecrement = this.handleDecrement.bind(this);
//     // }

//     // state = {
//     //     value: 1,
//     //     name: 'Vova',
//     //     age: 25,
//     // };

//     state = {
//         value: this.props.initialValue,
//         name: 'Vova',
//         age: 25,
//     };

//     handleIncrement = event => {
//         this.setState((prevState, props) => {
//             return {
//                 value: prevState.value + props.step,
//             };
//         });
//     };

//     handleDecrement = event => {
//         this.setState((prevState, props) => {
//             return {
//                 value: prevState.value - props.step,
//             };
//         });
//     };

//     // handleIncrement = event => {
//     //     this.setState({
//     //         value: this.state.value + 1,
//     //     });
//     // };

//     // handleDecrement = event => {
//     //     this.setState({
//     //         value: this.state.value - 1,
//     //     });
//     // };

//     render() {
//         let { name, value } = this.state;

//         return (
//             <div>
//                 <button onClick={this.handleIncrement} type="button">
//                     Increment
//                 </button>
//                 <span> {value} </span>
//                 {/* <span> {name} </span> */}
//                 <button onClick={this.handleDecrement} type="button">
//                     Decrement
//                 </button>
//             </div>
//         );
//     }
// }

// Bind in constructor
// export default class Counter extends Component {
//     constructor() {
//         super();
//         this.handleIncrement = this.handleIncrement.bind(this);
//         this.handleDecrement = this.handleDecrement.bind(this);
//     }

//     handleIncrement(event) {
//         console.log(this);
//         console.log('Increment', event);
//     }

//     handleDecrement(event) {
//         console.log(this);
//         console.log('Decrement', event);
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.handleIncrement} type="button">
//                     Increment
//                 </button>
//                 <span>0</span>
//                 <button onClick={this.handleDecrement} type="button">
//                     Decrement
//                 </button>
//             </div>
//         );
//     }
// }

// ===================================
// Bind this
// export default class Counter extends Component {
//     handleIncrement(event) {
//         console.log(this);
//         console.log('Increment', event);
//     }

//     handleDecrement(event) {
//         console.log(this);
//         console.log('Decrement', event);
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.handleIncrement.bind(this)} type="button">
//                     Increment
//                 </button>
//                 <span>0</span>
//                 <button onClick={this.handleDecrement.bind(this)} type="button">
//                     Decrement
//                 </button>
//             </div>
//         );
//     }
// }

//========================================
// Callbacks
// export default class Counter extends Component {
//     render() {
//         return (
//             <div>
//                 <button
//                     onClick={event => {
//                         console.log('Increment', event);

//                         let evt = event
//                         setTimeout(() => {
//                             console.log(evt);
//                         }, 500);
//                     }}
//                     type="button"
//                 >
//                     Increment
//                 </button>
//                 <span>0</span>
//                 <button
//                     onClick={() => {
//                         console.log('Decrement');
//                     }}
//                     type="button"
//                 >
//                     Decrement
//                 </button>
//             </div>
//         );
//     }
// }
