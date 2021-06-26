import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import notLogged from "../../img/unlogged-icon.png";
import logged from "../../img/logged-icon.png";
import "./stylesheets/LoginButton.css";

function LoginButton() {
    const [login, setLogin] = useState({
        logged: false,
        username: ""
    });

    return(
        <div className="loginButtonContainer">
            <Link to="/loginArea">
                {!login.logged
                    ?
                        <div className="login_button">
                            <h3 data-testid="username">Not Logged</h3>
                            <img src={notLogged} alt="not logged icon" />
                        </div>
                    :
                        <div className="login_button">
                            <h3 data-testid="username">{login.username}</h3>
                            <img src={logged} alt="logged icon" />
                        </div>
                }
            </Link>
        </div>
    );
};

export default LoginButton;