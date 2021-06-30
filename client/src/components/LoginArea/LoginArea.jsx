import React from "react";
import "./stylesheets/LoginArea.css";

import Login from "./Login.jsx";
import CreateAccount from "./CreateAccount.jsx";

function LoginArea() {
    return(
        <div className="loginAreaContainer">
            <h1>Login Area</h1>
            <Login />
            <CreateAccount />
        </div>
    );
};

export default LoginArea;