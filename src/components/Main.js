import React from "react"
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Newsfeed from "../pages/Newsfeed";
import Form from './common/Form';
import Reset from '../pages/Reset';

const Main = ({ user, setUser}) => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState(null);

    // Create state variables for email and password
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const URL = "https://cascadesocial.herokuapp.com/posts/"

    const getPosts = async () => {
        const response = await fetch(URL);
        const postsArr = await response.json();
        setPosts(postsArr);
    }

    useEffect(() => {
        getPosts();
    }, []);
    
    return (
        <div className="main">
            <Routes>
                <Route 
                    path="/" 
                    element={
                        <Home 
                            user={user}
                            setUser={setUser}
                        />} 
                />
                <Route path="/login" 
                    element={
                        <Form 
                            title="Login"
                            setEmail={setEmail}
                            setPassword={setPassword}
                            // handleAction={() => handleAction("login")}
                        />} 
                />
                <Route path="/register" 
                    element={
                        <Form 
                        title="Register"
                        setEmail={setEmail}
                        setPassword={setPassword}
                        // handleAction={() => handleAction("register")}
                        />} 
                />
                <Route path='/reset' 
                    element={<Reset
                        title="Reset Password"
                    />} 
                />
                <Route path="/about" element={<About />} />
                <Route path="/newsfeed" 
                    element={<Newsfeed 
                        posts={posts}
                        getPosts={getPosts}
                        URL={URL}
                    />} 
                />
            </Routes>
        </div>
    );
}

export default Main;