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
    const [users, setUsers] = useState([]);

    const handleChange = e => {
        e.preventDefault();
        setLoginData({...loginData, [e.target.name]: e.target.value});
    };

    const loginAction = e => {
        e.preventDefault();
        axios.get("http://localhost:8082/api/users/")
            .then(res => setUsers(res.data))
            .then(users.forEach(user => {
                if (user.email === loginData.email && user.password === loginData.password) {
                    alert("Login successful!!!");
                    localStorage.setItem("logged", true);
                    localStorage.setItem("username", user.username);
                    localStorage.setItem("pass", user.pass);
                    localStorage.setItem("id", user._id);
                    history.push("/");
                } else {
                    alert("Password or email not correct! Please try again.");
                };
            }))
            .catch(err => {
                alert("User not found or data inserted incorrect");
                setLoginData({...loginData, password: ""});
            });
    };

    return(
        <div className="loginContainer">
            <h1>Login</h1>
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