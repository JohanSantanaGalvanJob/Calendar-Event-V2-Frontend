import { CiHome, CiBookmark } from "react-icons/ci";
import { IoAddCircleOutline } from "react-icons/io5";
import './Navbar.css'

function Navbar({ isNavbarOpen, toggleNavbar, closeNavbar  }) {
    return (
        <>
            <nav className={`navbar-container ${isNavbarOpen ? 'open' : ''}`}>
                <div className="navbar-element">
                    <CiHome size={32} />
                    <p>Events Page</p>
                </div>
                <div className="navbar-element">
                    <CiBookmark size={32} />
                    <p>Events Saved</p>
                </div>
                <div className="navbar-element">
                    <IoAddCircleOutline size={32} />
                    <p>Location List</p>
                </div>
                <div className="navbar-element">
                    <IoAddCircleOutline size={32} />
                    <p>Event List</p>
                </div>
                <div className="navbar-element">
                    <IoAddCircleOutline size={32} />
                    <p>Event Category List</p>
                </div>
            </nav>

            {isNavbarOpen && (
                <div className="navbar-shadow visible" onClick={closeNavbar}></div>
            )}
        </>
    );
}


export default Navbar;
