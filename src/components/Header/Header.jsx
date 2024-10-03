import { FaBars, FaSearch, FaUser } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { API_URL } from "../../constants";
import './Header.css';
import Navbar from "../Navbar/Navbar.jsx";

function Header() {
    const [user, setUser] = useState(null);
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
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

    const toggleNavbar = () => {
        setIsNavbarOpen(prev => !prev); // Alternar el estado
    };

    // Cerrar el navbar cuando se hace clic en la sombra del navbar
    const closeNavbar = () => {
        setIsNavbarOpen(false);
    };


    return (
        <>
            <div className='header-bar'>
                <FaBars size={20} className='header-FaBar' onClick={toggleNavbar} />
                <div className='header-bar-searchbar'>
                    <input type='text' />
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
            <Navbar isNavbarOpen={isNavbarOpen} toggleNavbar={toggleNavbar} closeNavbar={closeNavbar} />
        </>
    );
}

export default Header;
