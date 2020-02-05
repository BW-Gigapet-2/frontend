<<<<<<< HEAD
import React, { useContext } from 'react'
import UserContext from './UserContext'
import axios from 'axios'

const RegistrationForm = props => {
	const user = useContext(UserContext)

=======
import React, { useContext } from 'react';
import UserContext from './UserContext';
import axios from 'axios';

const RegistrationForm = props => {
    const user = useContext(UserContext)
    
>>>>>>> db07846cf73153f8a5d047ad47b7e38a2c3fbd68
	const handleSubmit = e => {
		e.preventDefault()

		const registerUser = {
			username: e.target.username.value,
			password: e.target.password.value
		}

		axios
			.post('https://gigapet2020.herokuapp.com/api/auth/register', registerUser)
			.then(res => {
				console.log(res.data)
				user.username = registerUser.username
<<<<<<< HEAD
				localStorage.setItem('username', registerUser.username)
=======
                localStorage.setItem('username', registerUser.username)
                localStorage.setItem('token', res.data.token)
>>>>>>> db07846cf73153f8a5d047ad47b7e38a2c3fbd68
				props.history.push('/')
			})
			.catch(err => console.error(err))
	}

	return (
		<container className='registerContainer'>
			<h1>Register</h1>
<<<<<<< HEAD

=======
​
>>>>>>> db07846cf73153f8a5d047ad47b7e38a2c3fbd68
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					name='username'
					placeholder='Username'
					className='inputBorder'
				/>
<<<<<<< HEAD

=======
​
>>>>>>> db07846cf73153f8a5d047ad47b7e38a2c3fbd68
				<input
					type='password'
					name='password'
					placeholder='Password'
					className='signUpInput inputBorder'
				/>
				<input type='submit' />
			</form>
		</container>
	)
}

<<<<<<< HEAD
export default RegistrationForm

// export default function RegistrationForm(props) {
// 	// --- useForm ---
// 	const { register, handleSubmit, errors } = useForm()
// 	// ---------------

// 	///////////////////////////////////
// 	const [user, setUser] = useState({
// 		username: '',
// 		password: '',
// 		location: '',
// 		email: ''
// 	})

// 	const handleChange = e => {
// 		setUser({
// 			...user,
// 			[e.target.name]: e.target.value
// 		})
// 	}
// 	///////////////////////////////////

// 	// --- onSubmit ---
// 	const onSubmit = e => {
// 		e.preventDefault()
// 		//axiosWithAuth()
// 		axios
// 			.post('https://gigapet2020.herokuapp.com/api/auth/register', user)
// 			//.post('/users/login', login)
// 			.then(res => {
// 				console.log(res)
// 				// localStorage.setItem('token', res.data.token);
// 				props.history.push('/')
// 			})
// 			.catch(err => console.log(err))
// 	}

// 	// --- Return Statement ---
// 	return (
// 		// --- Div container ---
// 		<div>
// 			<div>
// 				<div>Register</div>
// 				{/* <form onSubmit={handleSubmit(onSubmit)}> */}

// 				{/* --- Form --- */}
// 				<form onSubmit={onSubmit}>
// 					{/* --- Username Field --- */}
// 					{/* --- label --- */}
// 					<label htmlFor='username'>
// 						{/* <span> Do you already have an account? <Link tag={Link} to="/login"> Sign in </Link></span> */}
// 						Username:
// 					</label>
// 					<input
// 						type='text'
// 						name='username'
// 						placeholder='username'
// 						ref={register({ required: true })}
// 						value={user.username}
// 						onChange={handleChange}
// 					/>
// 					{/* --- end of label --- */}

// 					{/* --- errors --- */}

// 					{/* --- end of errors --- */}
// 					{/* --- End of Username Field--- */}

// 					{/* --- Password Field --- */}
// 					{/* --- label --- */}
// 					<label htmlFor='password'>Password:</label>
// 					<input
// 						type='password'
// 						placeholder='Password'
// 						name='password'
// 						ref={register({ required: true })}
// 						value={user.password}
// 						onChange={handleChange}
// 					/>

// 					{/* --- errors --- */}

// 					{/* --- End of Password Field --- */}

// 					{/* --- Location Field --- */}
// 					{/* --- label --- */}

// 					{/* --- Submit Button --- */}
// 					<button onSubmit={handleSubmit} className='button'>
// 						Let's Eat!
// 					</button>
// 					{/*  --- End of Submit Button --- */}

// 					{/* --- End of Form --- */}
// 				</form>
// 			</div>
// 			{/* --- End of Login container --- */}
// 		</div>
// 	)
// }
=======
export default RegistrationForm;

// import React, {useState} from 'react';
// import { useForm } from "react-hook-form";
// import axios from 'axios';

// export default function RegistrationForm(props) {

//     // --- useForm ---
//         const { register, handleSubmit, errors } = useForm();
//     // ---------------
    
    
//       ///////////////////////////////////
//     const [user,setUser] = useState({   
//         username: '',
//         password: '',
//         location: '',
//         email: '',
//     });
    
//     const handleChange = e => {
//         setUser({
//             ...user,
//             [e.target.name]: e.target.value
//         })}; 
//     ///////////////////////////////////
    
    
//     // --- onSubmit ---
//     const onSubmit = e => {
//         e.preventDefault();  
//     //axiosWithAuth()
//     axios
//     .post('https://gigapet2020.herokuapp.com/api/auth/register', user)
//     //.post('/users/login', login)
//     .then(res => {
//         console.log(res.data)
//         // localStorage.setItem('token', res.data.token);
//         props.history.push('/');
//     })
//     .catch(err => console.log(err));
//     }
    
//         // --- Return Statement ---
//         return (
//         // --- Div container ---
//             <div>
//                 <div>
//                 <div>Register</div>
//                 {/* <form onSubmit={handleSubmit(onSubmit)}> */}
    
//         {/* --- Form --- */}
//             <form onSubmit={onSubmit}>
    
//             {/* --- Username Field --- */}
//                 {/* --- label --- */}
//                 <label htmlFor="username">
//                     {/* <span> Do you already have an account? <Link tag={Link} to="/login"> Sign in </Link></span> */}
//                     Username: 
//                     </label>
//                     <input type="text"
//                     name="username"
//                     placeholder="username"
//                     ref={ register({ required: true})}
//                     value={user.username}
//                     onChange={handleChange}
//                     />
//                 {/* --- end of label --- */}
    
//                 {/* --- errors --- */}
                
//                 {/* --- end of errors --- */}
//             {/* --- End of Username Field--- */}
    
//             {/* --- Password Field --- */}
//                 {/* --- label --- */}
//                 <label htmlFor="password">
//                     Password: 
//                 </label>
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     name="password"
//                     ref={ register ({ required: true})}
//                     value={user.password}
//                     onChange={handleChange}
//                     />
    
//                 {/* --- errors --- */}
                
//             {/* --- End of Password Field --- */}
    
//             {/* --- Location Field --- */}
//                 {/* --- label --- */}
                
                    
//                 {/* --- Submit Button --- */}
//                         <button onSubmit={handleSubmit} className="button">Let's Eat!</button>
//                 {/*  --- End of Submit Button --- */}
    
//         {/* --- End of Form --- */}
//             </form>
//             </div>
//         {/* --- End of Login container --- */}
//                 </div>
//         )
//     }
>>>>>>> db07846cf73153f8a5d047ad47b7e38a2c3fbd68
