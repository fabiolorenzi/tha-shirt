import React from "react";
import "./stylesheets/LoginArea.css";

import Login from "./Login.jsx";
import CreateAccount from "./CreateAccount.jsx";

function LoginArea() {
    return(
        <div className="loginAreaContainer">
            <h1>Login Area</h1>
            <div>
                <div className="login">
                    <Login />
                </div>
                <div className="createAccount">
                    <CreateAccount />
                </div>
            </div>
        </div>
    );
};

export default LoginArea;