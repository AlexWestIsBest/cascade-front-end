import  { useState } from "react";
import Posts from "../components/Posts";

const Newsfeed = (props) => {

    return <div>
            <h2>Newsfeed Page</h2>
            <Posts posts={props.posts} />
        </div>;
    };

export default Newsfeed;