import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./components/App";

import store from "./redux/store";

console.log("store", store);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById("root")
);

// let state = {
//     loaders: true,
//     httpReq: false
//     errors: false,
//     user : {},
//     articles: []
// }
