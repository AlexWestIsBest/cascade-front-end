import React from "react"
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Newsfeed from "../pages/Newsfeed";

const Main = (props) => {
    const [posts, setPosts] = useState(null);

    const URL = "https://cascadesocial.herokuapp.com/posts/"

    const getPosts = async () => {
        const response = await fetch(URL);
        const postsArr = await response.json();
        setPosts(postsArr);
    }
      
    const deletePost = async (id) => {
        await fetch(URL + id, {
            method: 'DELETE'
        })
        getPosts()
    }

    useEffect(() => {
        getPosts();
    }, []);
    
    return (
        <div className="main">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/newsfeed" 
                    element={<Newsfeed 
                        posts={posts}
                        deletePost={deletePost}
                    />} 
                />
            </Routes>
        </div>
    );
}

export default Main;