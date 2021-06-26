import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";

function App() {
    return(
        <div className="app">
            <Header />
            <Switch>
            </Switch>
        </div>
    );
};

export default App;