import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import MenuBar from "./components/MenuBar/MenuBar.jsx";
import Home from "./components/Home/Home.jsx";
import LoginArea from "./components/LoginArea/LoginArea.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
    return(
        <div className="app">
            <Header />
            <MenuBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={LoginArea} />
            </Switch>
            <Footer />
        </div>
    );
};

export default App;