import React, {useState} from 'react';
import axios from 'axios';

import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom';
import '../styling/Reg.css';
// --- Login Page Function ---
export default function Login(props) {
// --- useForm ---
    const { register, handleSubmit, errors } = useForm();

    ///////////////////////////////////
    const [user,setUser] = useState({   
        username: '',
        password: ''
    });

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })}; 
    ///////////////////////////////////


// --- onSubmit ---
    const onSubmit = e => {
        e.preventDefault();
        console.log(register)
    axios
    //axios
    .post('https://gigapet2021.herokuapp.com/api/auth/login', user)

    .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.token);
        props.history.push('/');
    })
    .catch(err => console.log(err));
    }
    // --- End of Axios Call ---

    // --- Return Statement ---
    return (
    // --- Div container ---
    <div className="reg-page">
        <div className="reg-box">
            <container className='registerContainer'>
            <h1>Login</h1>
            {/* <form onSubmit={handleSubmit(onSubmit)}> */}
    {/* --- Form --- */}
        <form onSubmit={onSubmit}>
        {/* --- Username Field --- */}
            {/* --- label --- */}
            {/* <label className='label' htmlFor="username">
                
                Username:
                </label> */}
                <input type="text"
                name="username"
                placeholder="username"
                ref={ register({ required: true, minLength: 5, maxLength: 15})} 
                ////////////
                value={user.username}
                onChange={handleChange}
                ///////////
                />

        {/* --- End of Username Field--- */}
            
        {/* --- Password Field --- */}
            {/* --- label --- */}
            {/* <label className='label' htmlFor="password">
                Password:  
            </label> */}
            <input
                type="password"
                placeholder="Password"
                name="password"
                ref={ register ({ required: true, minLength: 3})} 
                ///////////
                value={user.password}
                onChange={handleChange}
                //////////
                />
            
        {/* --- End of Password Field --- */}

        {/* --- Submit Button --- */}
                <button>Let's Eat!</button>
        {/*  --- End of Submit Button --- */}

                <button><Link className='buttons' to={'/register'}>Register</Link></button>

        {/* --- End of Form --- */}
            </form>
            </container>
    {/* --- End of Login container --- */}
            </div>
            </div>
    )}