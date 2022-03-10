import React from 'react';
import './App.css';
import { NavLink, Route, Routes } from "react-router-dom";
import { Zero } from "./components/Zero";
import { One } from "./components/One";
import { Two } from "./components/Two";

function App() {
    return (
        <div className={"App"}>
            <header className={"App-header"}>
                <h1>Hello Router</h1>
                <ul>
                    <li><NavLink to={"/"}>Zero</NavLink></li>
                    <li><NavLink to={"/one"}>One</NavLink></li>
                    <li><NavLink to={"/two"}>Two</NavLink></li>
                </ul>
                <Routes>
                    <Route path="/" element={<Zero/>}/>
                    <Route path="/one" element={<One/>}/>
                    <Route path="/two" element={<Two/>}/>
                </Routes>
            </header>
        </div>
    );
}

export default App;