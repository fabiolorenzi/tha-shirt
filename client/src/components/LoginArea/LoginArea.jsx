import React from "react";
import "./stylesheets/LoginArea.css";

import Login from "./Login.jsx";

function LoginArea() {
    return(
        <div className="loginAreaContainer">
            <h1>Login Area</h1>
            <Login /> 
        </div>
    );
};

export default LoginArea;