import React from "react";
import {Link} from "react-router-dom";

const Navigation = (props) => {
    return (
        <div className="nav">
            <Link to="/">
                <div>Home</div>
            </Link>
            <Link to="/newsfeed">
                <div>Newsfeed</div>
            </Link>
            <Link to="/about">
                <div>About</div>
            </Link>
        </div>
    );
}

export default Navigation;