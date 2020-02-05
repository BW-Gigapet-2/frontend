import React, {useState} from 'react';

import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';


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
    axiosWithAuth()
    //axios
    .post('/auth/login', user)
    //.post('/users/login', login)
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
    <div>
        <div>
            <div>Login</div>
            {/* <form onSubmit={handleSubmit(onSubmit)}> */}
    {/* --- Form --- */}
        <form onSubmit={onSubmit}>
        {/* --- Username Field --- */}
            {/* --- label --- */}
            <label htmlFor="username">
                {/* <span> Are you a new user? <Link tag={Link} to="/signup"> Sign up </Link></span> */}
                Username:
                </label>
                <input type="text"
                name="username"
                placeholder="username"
                ref={ register({ required: true, minLength: 5, maxLength: 15})} 
                ////////////
                value={user.username}
                onChange={handleChange}
                ///////////
                />

            {/* --- errors --- */}
            {errors.username && errors.username.type === "required" && (
                <span> Username is required </span>
                )}
            {errors.username && errors.username.type === "minLength" && (
                <span> Username is too short </span>
                )}
            {errors.username && errors.username.type === "maxLength" && (
                <span> Username is too long </span>
                )}
        {/* --- End of Username Field--- */}
            
        {/* --- Password Field --- */}
            {/* --- label --- */}
            <label htmlFor="password">
                Password:  
            </label>
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
            
            {/* --- errors --- */}
            {errors.password && errors.password.type === "required" && (
                <span>Password is required</span>
                )}
            {errors.password && errors.password.type === "minLength" && (
                <span> Password is too short - 3 characters</span>
                )}
        {/* --- End of Password Field --- */}

        {/* --- Submit Button --- */}
                <button>Let's Eat!</button>
        {/*  --- End of Submit Button --- */}

                <button> <Link className='buttons' to={'/register'}>Register</Link></button>

        {/* --- End of Form --- */}
            </form>
    {/* --- End of Login container --- */}
            </div>
            </div>
    )}