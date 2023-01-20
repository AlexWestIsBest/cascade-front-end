import { useNavigate } from 'react-router-dom';
import { logOut } from '../firebase';

const Logout = ({ user, setUser }) => {
    const navigate = useNavigate();

    // logout function
    const handleLogout = () => {
        logOut()
        setUser(null)
        navigate('/login')
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