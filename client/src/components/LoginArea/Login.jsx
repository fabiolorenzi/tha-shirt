import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./stylesheets/Login.css";

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

    let i = 0;

    const loginAction = e => {
        e.preventDefault();
        axios.get("http://localhost:8082/api/users/")
            .then(res => setUsers(res.data))
            .then(users.forEach(user => {
                if (user.email === loginData.email) {
                    i = 0;
                    if (user.password === loginData.password) {
                        localStorage.setItem("logged", true);
                        localStorage.setItem("username", user.username);
                        localStorage.setItem("pass", user.pass);
                        localStorage.setItem("id", user._id);
                        alert("Login successful!!!");
                        history.push("/");
                        window.location.reload();
                    } else {
                        setLoginData({...loginData, password: ""});
                        alert("Password not correct! Please check the email you inserted.");
                    };
                } else if (i < users.length - 1) {
                    i++;
                } else {
                    alert("User not found! Please check the email you inserted or create the account.");
                    setLoginData({
                        email: "",
                        password: ""
                    });
                    i = 0;
                };
            }))
            .catch(err => {
                alert("Error during login, please try again.");
                setLoginData({
                    email: "",
                    password: ""
                });
            });
    };

    return(
        <div className="loginContainer">
            <h1>Login</h1>
            <form noValidate onSubmit={loginAction}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={loginData.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" value={loginData.password} onChange={handleChange} />
                </div>
                    <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;