import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import MenuBar from "./components/MenuBar/MenuBar.jsx";

function App() {
    return(
        <div className="app">
            <Header />
            <MenuBar />
            <Switch>
            </Switch>
        </div>
    );
};

export default App;