import { useState, useEffect } from 'react';
import { FaBars, FaSearch, FaUser } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { API_URL } from "../../constants";
import "./Events.css"

function Events() {

    const IMAGE_SOURCE_PLACEHOLDER = 'https://media.licdn.com/dms/image/C5612AQGbvv_Zj5JQ1w/article-cover_image-shrink_720_1280/0/1551108267663?e=2147483647&v=beta&t=0Q8tP_opTQTHswRBcgHlCOzSIc67crsHE61AGWLOS44'

    const [user, setUser] = useState(null);
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (token) {
            // Realiza la petición al endpoint del perfil del usuario
            fetch(`${API_URL}/profile`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.user) {
                        setUser(data.user); // Guardar los datos del usuario
                    }
                })
                .catch((error) => {
                    console.error('Error fetching user profile:', error);
                });
        }
    }, [token]);

    return (
        <>
            <div className='events-container'>

                <div className='events-navbar'>
                    <FaBars size={20} className='events-FaBar' />
                    <div className='events-navbar-searchbar'>
                        <input type='text'></input>
                        <FaSearch size={20} />
                    </div>
                    {user && (
                        <div className="user-info">
                            {user.image_url ? (
                                <img src={user.image_url} alt="Profile" className="user-image" />
                            ) : (
                                <div className="user-image-placeholder" />
                            )}
                            {/* Mostrar el ícono solo si no hay imagen */}
                            {!user.image_url && <FaUser size={20} className='events-FaUser' />}
                        </div>
                    )}
                </div>

                <div className='events-card-container'>

                    <div className='events-card'>

                        <div className='events-card-image-container'>
                            <img src={IMAGE_SOURCE_PLACEHOLDER} alt='Test Image' className='events-card-image' ></img>
                            <CiBookmark size={25} />
                        </div>
                        <div className='events-card-content'>
                            <h2>Evento Prueba</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. MDN FRFNRIOERNF EFNOIFNEF</p>
                            <div className='events-card-content-label-container'>
                                <p className='events-card-content-label'>Las Palmas</p>
                                <p className='events-card-content-label'>Event Category</p>
                            </div>
                        </div>
                    </div>

                    <div className='events-card'>

                        <div className='events-card-image-container'>
                            <img src={IMAGE_SOURCE_PLACEHOLDER} alt='Test Image' className='events-card-image' ></img>
                            <CiBookmark size={25} />
                        </div>
                        <div className='events-card-content'>
                            <h2>Evento Prueba</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. MDN FRFNRIOERNF EFNOIFNEF</p>
                        </div>
                    </div>

                    <div className='events-card'>

                        <div className='events-card-image-container'>
                            <img src={IMAGE_SOURCE_PLACEHOLDER} alt='Test Image' className='events-card-image' ></img>
                            <CiBookmark size={25} />
                        </div>
                        <div className='events-card-content'>
                            <h2>Evento Prueba</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. MDN FRFNRIOERNF EFNOIFNEF</p>
                        </div>
                    </div>

                    <div className='events-card'>

                        <div className='events-card-image-container'>
                            <img src={IMAGE_SOURCE_PLACEHOLDER} alt='Test Image' className='events-card-image' ></img>
                            <CiBookmark size={25} />
                        </div>
                        <div className='events-card-content'>
                            <h2>Evento Prueba</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. MDN FRFNRIOERNF EFNOIFNEF</p>
                        </div>
                    </div>

                    <div className='events-card'>

                        <div className='events-card-image-container'>
                            <img src={IMAGE_SOURCE_PLACEHOLDER} alt='Test Image' className='events-card-image' ></img>
                            <CiBookmark size={25} />
                        </div>
                        <div className='events-card-content'>
                            <h2>Evento Prueba</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. MDN FRFNRIOERNF EFNOIFNEF</p>
                        </div>
                    </div>

                    <div className='events-card'>

                        <div className='events-card-image-container'>
                            <img src={IMAGE_SOURCE_PLACEHOLDER} alt='Test Image' className='events-card-image' ></img>
                            <CiBookmark size={25} />
                        </div>
                        <div className='events-card-content'>
                            <h2>Evento Prueba</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. MDN FRFNRIOERNF EFNOIFNEF</p>
                        </div>
                    </div>

                    <div className='events-card'>

                        <div className='events-card-image-container'>
                            <img src={IMAGE_SOURCE_PLACEHOLDER} alt='Test Image' className='events-card-image' ></img>
                            <CiBookmark size={25} />
                        </div>
                        <div className='events-card-content'>
                            <h2>Evento Prueba</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. MDN FRFNRIOERNF EFNOIFNEF</p>
                        </div>
                    </div>


                </div>

                <div className='events-footer'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. MDN FRFNRIOERNF EFNOIFNEF</p>
                </div>
            </div>

        </>
    )
}

export default Events;
