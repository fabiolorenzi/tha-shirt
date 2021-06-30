import React, { useState } from "react";
import axios from "axios";
import "./stylesheets/CreateAccount.css";

function CreateAccount() {
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
        password: ""
    });

    const handleChange = e => {
        e.preventDefault();
        setUser({...user, [e.target.name]: e.target.value});
    };

    const createUser = e => {
        e.preventDefault();
        const newUser = {
            username: user.username,
            name: user.name,
            surname: user.surname,
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

        axios.post("https://localhost:8082/api/users/", newUser)
            .then(res => {
                alert(`New user created successfully! Now you can login with the credentials you gave.`);
                setUser({
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
                    password: ""
                });
                window.location.reload();
            })
            .catch(err => alert(`${err}. Try again.`));
    };

    return(
        <div className="createAccountContainer">
            <h1>Create account</h1>
            <form onSubmit={createUser}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={user.name} onChange={handleChange} />
                <label htmlFor="surname">Surname</label>
                <input type="text" name="surname" value={user.surname} onChange={handleChange} />
                <label htmlFor="username">Username</label>
                <input type="text" name="username" value={user.username} onChange={handleChange} />
                <label htmlFor="birthday">Birthday</label>
                <input type="date" name="birthday" value={user.birthday} onChange={handleChange} />
                <label htmlFor="gender">Gender</label>
                <div className="genderSelector" onChange={handleChange}>
                    <input type="radio" name="gender" value="male" />
                    <label>Male</label>
                    <input type="radio" name="gender" value="female" />
                    <label>Female</label>
                    <input type="radio" name="gender" value="not-binary" />
                    <label>Not Binary</label>
                </div>
                <label htmlFor="nation">Nation</label>
                <input type="text" name="nation" value={user.nation} onChange={handleChange} />
                <label htmlFor="city">City</label>
                <input type="text" name="city" value={user.city} onChange={handleChange} />
                <label htmlFor="street">Street</label>
                <input type="text" name="street" value={user.street} onChange={handleChange} />
                <label htmlFor="number">Number</label>
                <input type="text" name="number" value={user.number} onChange={handleChange} />
                <label htmlFor="postal_code">Postal Code</label>
                <input type="text" name="postal_code" value={user.postal_code} onChange={handleChange} />
                <label htmlFor="tel">Tel</label>
                <input type="tel" name="tel" value={user.tel} onChange={handleChange} />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={user.email} onChange={handleChange} />
                <label htmlFor="password">Password</label>
                <input type="text" name="password" value={user.password} onChange={handleChange} />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default CreateAccount;