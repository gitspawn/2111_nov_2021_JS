import React from 'react';

export default function CounterControls(props) {
    return (
        <div>
            <button onClick={props.onHandleIncrement} type="button">
                Increment
            </button>
            <button onClick={props.onHandleDecrement} type="button">
                Decrement
            </button>
        </div>
    );
}
