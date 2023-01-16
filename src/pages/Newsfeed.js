import  { useState } from "react";

const Newsfeed = (props) => {

    const loaded = () => {
        return props.posts.map((post) => (
            <div key={post._id} className="post">
                <h3>{post.title}</h3>
                <p><img className="postImg" src={post.image} alt={post.title} /></p>
                <p>{post.content}</p>
            </div>
        ));
    };

    const loading = () => {
        return <h3>Loading...</h3>;
    };

    return <div>
            <h2>Newsfeed Page</h2>
            {props.posts ? loaded() : loading()}
        </div>;
    };

export default Newsfeed;