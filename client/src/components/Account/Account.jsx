import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import LoggedIcon from "../../img/logged-icon.png";
import "./stylesheets/Account.css";

function Account() {
    const history = useHistory();
    const [user, setUser] = useState({});
    const id = localStorage.getItem("id");
    const [show, setShow] = useState({
        showP: false,
        word: "password"
    });
    const [inChange, setInChange] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8082/api/users/" + id)
            .then(res => setUser(res.data))
            .catch(err => console.log({err}))
        console.log(user);
        // eslint-disable-next-line
    }, []);

    const handleChange = e => {
        e.preventDefault();
        if (inChange) {
            setUser({...user, [e.target.name]: e.target.value});
        }
    };

    const psswShow = e => {
        e.preventDefault();
        if (show.showP) {
            setShow({
                showP: false,
                word: "password"
            });
        } else {
            setShow({
                showP: true,
                word: "text"
            });
        }; 
    };

    const changer = e => {
        e.preventDefault();
        setInChange(!inChange);
    };

    const saveChange = e => {
        e.preventDefault();
    };

    function cancelChange() {
        history.push("/account")
    };

    return(
        <div className="accountContainer">
            <h1>{user.username}</h1>
            <div className="accountImage">
                <img src={LoggedIcon} alt="account" />
            </div>
            <form className="listInformation">
                <div>
                    <h3>Name:</h3>
                    <input type="text" name="name" value={user.name} onChange={handleChange} />
                </div>
                <div>
                    <h3>Surname:</h3>
                    <input type="text" name="surname" value={user.surname} onChange={handleChange} />
                </div>
                <div>
                    <h3>Username:</h3>
                    <input type="text" name="username" value={user.username} onChange={handleChange} />
                </div>
                <div>
                    <h3>Birthday:</h3>
                    <input type="date" name="birthday" value={user.birthday} onChange={handleChange} />
                </div>
                <div className="radiusSelector">
                    <h3 id="genderLabelAccount">Gender</h3>
                    <div className="genderSelector" onChange={handleChange}>
                        <div>
                            <input type="radio" name="gender" value="male" className="radInp" />
                            <p className="radLab">Male</p>
                        </div>
                        <div>
                            <input type="radio" name="gender" value="female" className="radInp" />
                            <p className="radLab">Female</p>
                        </div>
                        <div>
                            <input type="radio" name="gender" value="not-binary" className="radInp" />
                            <p className="radLab">Not Binary</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>Nation:</h3>
                    <input type="text" name="nation" value={user.nation} onChange={handleChange} />
                </div>
                <div>
                    <h3>Street:</h3>
                    <input type="text" name="street" value={user.street} onChange={handleChange} />
                </div>
                <div>
                    <h3>Number:</h3>
                    <input type="text" name="number" value={user.number} onChange={handleChange} />
                </div>
                <div>
                    <h3>Postal Code:</h3>
                    <input type="text" name="postal_code" value={user.postal_code} onChange={handleChange} />
                </div>
                <div>
                    <h3>Tel:</h3>
                    <input type="tel" name="tel" value={user.tel} onChange={handleChange} />
                </div>
                <div>
                    <h3>Email:</h3>
                    <input type="email" name="email" value={user.email} onChange={handleChange} />
                </div>
                <div>
                    <h3>Password:</h3>
                    <input type={show.word} name="password" value={user.password} onChange={handleChange} />
                    <button onClick={psswShow} className="passwordShower">Show</button>
                </div>
                {
                    !inChange
                        ? <button onClick={changer}>Change Data</button>
                        : 
                            <div>
                                <button onClick={saveChange}>Save</button>
                                <button onClick={cancelChange}>Cancel</button>
                            </div>
                }
                <button>Delete Account</button>
            </form>
        </div>
    );
};

export default Account;