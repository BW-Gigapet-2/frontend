import React, { useContext } from 'react'
import UserContext from './UserContext'
import axios from 'axios'

import '../styling/Reg.css';

const RegistrationForm = props => {
	const user = useContext(UserContext)

	const handleSubmit = e => {
		e.preventDefault()

		const registerUser = {
			username: e.target.username.value,
			password: e.target.password.value
		}

		axios
			.post('https://gigapet2021.herokuapp.com/api/auth/register', registerUser)
			.then(res => {
				console.log(res.data)
				user.username = registerUser.username
				localStorage.setItem('username', registerUser.username)
				props.history.push('/login')
			})
			.catch(err => console.error(err))
	}

	return (
	<div className='reg-page'>
		<div className='reg-box'>
		<container className='registerContainer'>
			<h1>Register</h1>

			<form onSubmit={handleSubmit}>
				<input
					type='text'
					name='username'
					placeholder='Username'
					className='inputBorder'
					/>

				<input
					type='password'
					name='password'
					placeholder='Password'
					className='signUpInput inputBorder'
					/>
				<input type='submit' />
			</form>
		</container>
	</div>
	</div>
	)
}

export default RegistrationForm
