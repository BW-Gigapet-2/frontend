import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

export default function RegistrationForm(props) {

    // --- useForm ---
        const { register, handleSubmit, errors } = useForm();
    // ---------------
    
    
      ///////////////////////////////////
    const [user,setUser] = useState({   
        username: '',
        password: '',
        location: '',
        email: '',
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
    //axiosWithAuth()
    axios
    .post('https://gigapet2020.herokuapp.com/auth/register', user)
    //.post('/users/login', login)
    .then(res => {
        console.log(res.data)
        // localStorage.setItem('token', res.data.token);
        props.history.push('/');
    })
    .catch(err => console.log(err));
    }
    
        // --- Return Statement ---
        return (
        // --- Div container ---
            <div>
                <div>
                <div>Register</div>
                {/* <form onSubmit={handleSubmit(onSubmit)}> */}
    
        {/* --- Form --- */}
            <form onSubmit={onSubmit}>
    
            {/* --- Username Field --- */}
                {/* --- label --- */}
                <label htmlFor="username">
                    {/* <span> Do you already have an account? <Link tag={Link} to="/login"> Sign in </Link></span> */}
                    Username: 
                    </label>
                    <input type="text"
                    name="username"
                    placeholder="username"
                    ref={ register({ required: true})}
                    value={user.username}
                    onChange={handleChange}
                    />
                {/* --- end of label --- */}
    
                {/* --- errors --- */}
                
                {/* --- end of errors --- */}
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
                    ref={ register ({ required: true})}
                    value={user.password}
                    onChange={handleChange}
                    />
    
                {/* --- errors --- */}
                
            {/* --- End of Password Field --- */}
    
            {/* --- Location Field --- */}
                {/* --- label --- */}
                
                    
                {/* --- Submit Button --- */}
                        <button onSubmit={handleSubmit} className="button">Let's Eat!</button>
                {/*  --- End of Submit Button --- */}
    
        {/* --- End of Form --- */}
            </form>
            </div>
        {/* --- End of Login container --- */}
                </div>
        )
    }