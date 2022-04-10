import React, { useEffect } from "react";
import { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const [loggedUser, setLoggedUser] = useState("");
    const navigate = useNavigate();

    Axios.defaults.withCredentials = true; // Allows cookie values to be set from a different domain

    const logOutUser = () => {
        Axios.post('http://localhost:4000/logout', {}).then((response) => {
            console.log(response);
            if (response.data == "Logout successful") {
                navigate('/authenticate')
            }
        });
    };


    useEffect(() => { // Runs every time we referesh our page
        Axios.get("http://localhost:4000/auth").then((response) => {
            if (response.data.loggedIn === true) {
                setLoggedUser(response.data.user[0].username);
            } else {
                navigate('/authenticate/')
            }
        })
    }, [])

    return (
        <div className="App">
            <h2>Welcome {loggedUser}</h2>
            <input type="button" onClick={logOutUser} name="" value="Log Out"></input>
        </div>
    );
}

export default Dashboard;