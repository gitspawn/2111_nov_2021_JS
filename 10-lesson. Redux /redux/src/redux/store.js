import { createStore } from "redux";
import { combineReducers } from "redux";

import mainReducer from "./counterReducer";

let rootReducer = combineReducers({
    counter: mainReducer,
});

let store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
