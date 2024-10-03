import { useEffect, useState } from 'react';
import './Locations.css'
import { API_URL } from '../../constants.js';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';

function Locations() {

    const [location, setLocation] = useState([]);
    const [name, setName] = useState('');

    useEffect(() => {
        fetch(`${API_URL}/locations`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    setLocation(data);
                    console.log(data)
                }
            })
            .catch((error) => {
                console.error('Error fetching locations:', error);
            });

    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${API_URL}/locations`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ location: { name } }),
        });
        const data = await response.json();
        if (response.ok) {
            setLocation([...location, data]);
            console.log('Location Created:', data);
        } else {
            console.error('Error:', data.error);
        }
    };



    return (

        <div className='location-container'>
            <Header></Header>

            <form className='location-form'>
                <label htmlFor='name'>Location</label>
                <input type='text' placeholder='Put a location here' value={name}
                    onChange={(e) => setName(e.target.value)} required></input>

                <button type='submit' onClick={handleSubmit}>Create a location</button>
            </form>

            <div className='location-content-container'>
                {location.map((location, index) =>
                    <div className='location-content' id={index}>
                        <h2>{location.name}</h2>
                    </div>


                )}
            </div>


            <Footer></Footer>
        </div>
    );

}
export default Locations
