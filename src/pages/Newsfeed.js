import  { useState } from "react";
import Posts from "../components/Posts";

const Newsfeed = (props) => {

    return <div className="newsfeed">
            <h3 className='title'>Newsfeed Page</h3>
            <Posts posts={props.posts} URL={props.URL} getPosts={props.getPosts} />
        </div>;
    };

export default Newsfeed;