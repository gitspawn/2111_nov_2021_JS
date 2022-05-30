// Action creators

import Type from "./actionTypes";

// export const Type = {
//     INCREMENT: "INCREMENT",
//     DECREMENT: "DECREMENT",
// };

export let onIncrement = (value) => {
    return {
        type: Type.INCREMENT,
        payload: value,
    };
};

export let onDecrement = (value) => {
    return {
        type: Type.DECREMENT,
        payload: value,
    };
};

export let changeStep = (value) => {
    return {
        type: Type.CHANGE_STEP,
        payload: { step: Number(value) },
    };
};
// let actions = {
//     onIcrement,
//     onDecrement

// }

// export default actions

// let sayName = (name) => {
//     return {
//         type: "sayHello",
//         payload: name
//     }
// }

// Pure action
// let action = {
//     type: "Vova",
//     payload: "Admin",
// };
