import Type from "./actionTypes";

// import { Type } from "./counterActions";
import { combineReducers } from "redux";

let valueReducer = (state = 0, action) => {
    switch (action.type) {
        case Type.INCREMENT:
            return state + action.payload;

        case Type.DECREMENT:
            return state - action.payload;
        default:
            return state;
    }
};

let stepReducer = (state = 2, action) => {
    switch (action.type) {
        case Type.CHANGE_STEP:
            return action.payload.step;

        default:
            return state;
    }
};

export default combineReducers({
    value: valueReducer,
    step: stepReducer,
});
