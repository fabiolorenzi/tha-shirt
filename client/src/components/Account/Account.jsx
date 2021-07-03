import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import LoggedIcon from "../../img/logged-icon.png";
import "./stylesheets/Account.css";

function Account() {
    const history = useHistory();
    const [user, setUser] = useState({
        name: "",
        surname: "",
        username: "",
        birthday: "",
        gender: "",
        nation: "",
        city: "",
        street: "",
        number: "",
        postal_code: "",
        tel: "",
        email: "",
        password: "",
        pass: false
    });
    const id = localStorage.getItem("id");
    const [show, setShow] = useState({
        showP: false,
        word: "password"
    });
    const [inChange, setInChange] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8082/api/users/" + id)
            .then(res => setUser({
                name: res.data.name,
                surname: res.data.surname,
                username: res.data.username,
                birthday: res.data.birthday,
                gender: res.data.gender,
                nation: res.data.nation,
                city: res.data.city,
                street: res.data.street,
                number: res.data.number,
                postal_code: res.data.postal_code,
                tel: res.data.tel,
                email: res.data.email,
                password: res.data.password,
                pass: res.data.pass
            }))
            .catch(err => console.log({err}))
        // eslint-disable-next-line
    }, []);

    const handleChange = e => {
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
        const data = {
            name: user.name,
            surname: user.surname,
            username: user.username,
            birthday: user.birthday,
            gender: user.gender,
            nation: user.nation,
            city: user.city,
            street: user.street,
            number: user.number,
            postal_code: user.postal_code,
            tel: user.tel,
            email: user.email,
            password: user.password,
            pass: false
        };
        axios.put("http://localhost:8082/api/users/" + id, data)
            .then(res => {
                alert("Data updated successfully!");
                localStorage.setItem("logged", true);
                localStorage.setItem("username", user.username);
                localStorage.setItem("pass", user.pass);
                localStorage.setItem("id", user._id);
                window.location.reload();
            })
            .catch(err => alert("Not possible to update the data. Please try again."));
    };

    function cancelChange() {
        history.push("/account")
    };

    function logout() {
        alert("Log out successfully!");
        localStorage.removeItem("logged");
        localStorage.removeItem("username");
        localStorage.removeItem("pass");
        localStorage.removeItem("id");
        history.push("/");
        window.location.reload();
    };

    const deleteAccount = () => {
        axios.delete("http://localhost:8082/api/users/" + id)
            .then(res => {
                alert("Account removed successfully!");
                localStorage.removeItem("logged");
                localStorage.removeItem("username");
                localStorage.removeItem("pass");
                localStorage.removeItem("id");
                history.push("/");
                window.location.reload();
            })
            .catch(err => alert("Account not removed correctly! Please try again."));
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
                    <input type="text" name="name" value={user.name || ""} onChange={handleChange} />
                </div>
                <div>
                    <h3>Surname:</h3>
                    <input type="text" name="surname" value={user.surname || ""} onChange={handleChange} />
                </div>
                <div>
                    <h3>Username:</h3>
                    <input type="text" name="username" value={user.username || ""} onChange={handleChange} />
                </div>
                <div>
                    <h3>Birthday:</h3>
                    <input type="date" name="birthday" value={user.birthday || ""} onChange={handleChange} />
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
                    <input type="text" name="nation" value={user.nation || ""} onChange={handleChange} />
                </div>
                <div>
                    <h3>Street:</h3>
                    <input type="text" name="street" value={user.street || ""} onChange={handleChange} />
                </div>
                <div>
                    <h3>Number:</h3>
                    <input type="text" name="number" value={user.number || ""} onChange={handleChange} />
                </div>
                <div>
                    <h3>Postal Code:</h3>
                    <input type="text" name="postal_code" value={user.postal_code || ""} onChange={handleChange} />
                </div>
                <div>
                    <h3>Tel:</h3>
                    <input type="tel" name="tel" value={user.tel || ""} onChange={handleChange} />
                </div>
                <div>
                    <h3>Email:</h3>
                    <input type="email" name="email" value={user.email || ""} onChange={handleChange} />
                </div>
                <div>
                    <h3>Password:</h3>
                    <input type={show.word} name="password" value={user.password || ""} onChange={handleChange} />
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
                <button onClick={logout}>Log Out</button>
                <button onClick={deleteAccount}>Delete Account</button>
            </form>
        </div>
    );
};

export default Account;