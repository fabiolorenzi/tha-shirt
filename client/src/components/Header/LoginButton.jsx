import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import notLogged from "../../img/unlogged-icon.png";
import logged from "../../img/logged-icon.png";
import "./stylesheets/LoginButton.css";

function LoginButton() {
    const [login, setLogin] = useState({
        logged: false,
        username: ""
    });

    useEffect(() => {
        if (localStorage.getItem("logged") === true) {
            setLogin({
                logged: true,
                username: localStorage.getItem("username")
            });
        }
    }, []);

    return(
        <div className="loginButtonContainer" data-testid="loginButtonContainer">
            <Link to={login.logged ? "/account/:id" : "/login"}>
                {!login.logged
                    ?
                        <div className="login_button" data-testid="button">
                            <h3 data-testid="username">Not Logged</h3>
                            <img src={notLogged} alt="not logged icon" />
                        </div>
                    :
                        <div className="login_button" data-testid="button">
                            <h3 data-testid="username">{login.username}</h3>
                            <img src={logged} alt="logged icon" />
                        </div>
                }
            </Link>
        </div>
    );
};

export default LoginButton;