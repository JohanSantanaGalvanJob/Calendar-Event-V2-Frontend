import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { API_URL } from "../../constants";
import "./Register.css"

function Register() {
    localStorage.removeItem('token');
    const [image, setImage] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthdate, setBirthdate] = useState(null);
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [, setToken] = useState('');
    const navigate = useNavigate();

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleRegister = async () => {

        const formData = new FormData();
        formData.append('auth[first_name]', first_name);
        formData.append('auth[last_name]', last_name);
        formData.append('auth[birthdate]', birthdate);
        formData.append('auth[email]', email);
        formData.append('auth[password]', password);
        formData.append('auth[image]', image); // Adjuntar la imagen

        const response = await fetch(`${API_URL}/signup`, {
            method: 'POST',
            headers: {

            },
            body: formData,
        });

        console.log(response);
        const data = await response.json();

        if (response.ok) {

            setToken(data.token);
            setImageUrl(data.image_url);
            localStorage.setItem('token', data.token); // Guarda el token en localStorage
            alert('Usuario creado correctamente');
            navigate('/events');

        } else {
            alert('Error al crear el usuario');
        }
    };

    return (
        <div className="register-container">

            <h2 className='register-title'>Register Form</h2>

            <form className="register-form">

                    <label>Upload Image</label>
                    <input type="file" onChange={handleImageChange} required />

                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    placeholder="Johan"
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />

                <label htmlFor="lastname">Last Name</label>
                <input
                    type="text"
                    placeholder="Santana"
                    value={last_name}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />

                <label htmlFor="birhdate">Birthdate</label>
                <input
                    type="date"
                    placeholder="Birthdate"
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
                    required
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    placeholder="email@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    placeholder="Hola1234"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="button" onClick={(e) => {
                    e.preventDefault();
                    handleRegister();
                }}>Register</button>

                <p>Already Logged?</p>
                <button>Login</button>

            </form>
        </div>
    );
}

export default Register;
