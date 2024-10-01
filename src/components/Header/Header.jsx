import { FaBars, FaSearch, FaUser } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { API_URL } from "../../constants";
import './Header.css'

function Header() {

    const [user, setUser] = useState(null);
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (token) {

            fetch(`${API_URL}/profile`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.user) {
                        setUser(data.user);
                    }
                })
                .catch((error) => {
                    console.error('Error fetching user profile:', error);
                });
        }
    }, [token]);

    return (

        <div className='header-bar'>
            <FaBars size={20} className='header-FaBar' />
            <div className='header-bar-searchbar'>
                <input type='text'></input>
                <FaSearch size={20} />
            </div>
            {user && (
                <div className="header-user-info">
                    {user.image_url ? (
                        <img src={user.image_url} alt="Profile" className="header-user-image" />
                    ) : (
                        <div className="header-user-image-placeholder" />
                    )}
                    {!user.image_url && <FaUser size={20} className='header-FaUser' />}
                </div>
            )}
        </div>
    )
}

export default Header;
