import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Newsfeed from "../pages/Newsfeed";

const Main = (props) => {
    return (
        <div className="main">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/newsfeed" element={<Newsfeed />} />
            </Routes>
        </div>
    );
}

export default Main;