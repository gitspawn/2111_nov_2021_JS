import React from "react";
import { connect } from "react-redux";
import { onIncrement, onDecrement } from "../../redux/counterActions";

function Counter({ value, step, onIncrement, onDecrement }) {
    return (
        <div>
            <button onClick={() => onIncrement(step)}>Increment</button>
            <span> {value} </span>
            <button onClick={() => onDecrement(step)}>Decrement</button>
        </div>
    );
}

let mapStateToProps = (state) => {
    console.log(state);

    return {
        value: state.counter.value,
        step: state.counter.step,
    };
};

// let mapDispatchToProps = (dispatch) => ({
//     onIncrement: (step) => dispatch(onIncrement(step)),
//     onDecrement: (step) => dispatch(onDecrement(step)),
// });

let mapDispatchToProps = {
    onIncrement: onIncrement,
    onDecrement: onDecrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
