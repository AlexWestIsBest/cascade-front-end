import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { updateFbProfile, 
        updateFbEmail, 
        deleteAccount, 
        updateFbPassword, logOut } from "../firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = ({ user }) => {
    const navigate = useNavigate();
    const [newPassword, setNewPassword] = useState("");

    // empty user object
    const formUser = {
        uid: "",
        email: "",
        displayName: ""
    }

    // create state variable for user profile
    // const [currentUser, setCurrentUser] = useState();
    const [profile, setProfile] = useState(formUser);

    useEffect(() => {
        if (user) {
            // setUpdateForm(user);
            setProfile(user);
            // console.log(updateForm)
        } 
    }, [user])

    const currentUser = user ? user : formUser;

    // test for empty displayName
    if (!currentUser.displayName) {
        currentUser.displayName = "No User Info"
    }

    // loaded state
    let userName = null
    if (!currentUser.displayName || currentUser.displayName === "No User Info") {
        // currentUser.displayName = "No User Info"
        userName = currentUser.email
    } else {
        userName = currentUser.displayName.split(" ")[0];
    }

    return (
        <section>
        <div className='homePage'>
            <h4>
                Hello {userName}!
            </h4>
            <form className="updateForm" >
                    <span>
                        UID: {profile.uid}
                    </span>
                    <span>
                        <label htmlFor="email">Email: </label>
                        <input 
                            type="text" 
                            name="email" 
                            value={profile.email}
                            // onChange={handleChange}
                        />
                    </span>
                    <span>
                        <label htmlFor="displayName">Full Name: </label>
                        <input 
                            type="text" 
                            name="displayName"
                            value={profile.displayName}
                            // onChange={handleChange}
                        />
                    </span>
                    <button
                        type="button"
                        className='btn btn-sm btn-success'
                        // onClick={updateProfile}
                        ><span className="bi bi-archive"></span>&nbsp;Update Profile
                    </button>
            </form>
            <form className="updateForm" >
                    <span>
                        <label htmlFor="newPassword">New Password: </label>
                        <input 
                            type="password" 
                            name="newPassword" 
                            value={newPassword}
                            // onChange={handleNewPassword} 
                        />
                    </span>
                    <button
                        type="button"
                        className='btn btn-sm btn-success'
                        // onClick={updatePassword}
                        ><span className="bi bi-arrow-clockwise"></span>&nbsp;Set Password
                    </button>
            </form>
            <div className="delDiv">
                <h5>Warning: Clicking here will delete your account!</h5>
                <button
                    type="button"
                    className='btn btn-sm btn-danger' 
                    // onClick={delAccount}
                    ><span className="bi-trash"></span>&nbsp;Delete Account
                </button>
            </div>
            <p>Post history coming soon...</p>
        </div>
        
        </section>
    )

    };

export default Home;