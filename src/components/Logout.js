import { logOut } from '../firebase';

const Logout = ({ user, setUser }) => {

    // logout function
    const handleLogout = () => {
        logOut()
        setUser(null)
        window.location.reload();
    }

    if (!user) {
        <div className="logoutBtn">Not logged in.</div>
    } else {
        return (
            <div className="logoutBtn">
                <button
                    type="button"
                    className='btn btn-sm btn-primary' 
                    onClick={handleLogout}>
                    <span className="bi bi-box-arrow-left"></span></button>
            </div>
        );
    }
}

export default Logout;