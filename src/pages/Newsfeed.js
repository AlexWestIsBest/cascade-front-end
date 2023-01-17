import  { useState } from "react";
import Posts from "../components/Posts";

const Newsfeed = (props) => {

    return <div className="newsfeed">
            <h3>Newsfeed Page</h3>
            <Posts posts={props.posts} deletePost={props.deletePost} />
        </div>;
    };

export default Newsfeed;