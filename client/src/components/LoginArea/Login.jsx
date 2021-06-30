import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./stylesheets/LoginArea.css";

function Login() {
    const history = useHistory();
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const handleChange = e => {
        e.preventDefault();
        setLoginData({...loginData, [e.target.name]: e.target.value});
    };

    const loginAction = (e) => {
        e.preventDefault();
        axios.get("https://localhost:8082/api/users/")
            .then(res => {
                if (res.data.email === loginData.email && res.data.password === loginData.password) {
                    alert("Login successful!!!");
                    localStorage.setItem("logged", true);
                    localStorage.setItem("username", res.data.username);
                    history.push("/");
                }
            })
            .catch(err => {
                alert("User not found or data inserted incorrect");
                setLoginData({...loginData, password: ""});
            });
    };

    return(
        <div className="loginContainer">
            <form noValidate onSubmit={loginAction}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={loginData.email} onChange={handleChange} />
                <label htmlFor="password">Password</label>
                <input type="text" name="password" value={loginData.password} onChange={handleChange} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;