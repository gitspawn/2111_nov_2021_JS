import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./base.css";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

// HOF
// function hi(userName) {
//     console.log(`Hello ${userName}`);
// }

// function sayHello(userName, calb) {
//     calb(userName);
// }

// sayHello("Vova", hi);

// HOC
// <User/>
// <Status/>

// <User info={Status}/>
