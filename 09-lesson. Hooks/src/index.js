// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./components/App";
// import AuthProvider from "./components/context/auth/AuthProvider";
// import "./index.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//     <AuthProvider>
//         <App />
//     </AuthProvider>,
//     document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import AuthProvider from "./components/context/auth/AuthProvider";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <AuthProvider>
    <App />,
    // </AuthProvider>,
    document.getElementById("root")
);
