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
	<div className='reg-page m-2'>
		<div className='reg-box'>
		<container className='registerContainer'>
			<h1>Register</h1>

			<form onSubmit={handleSubmit}>
				<input
					className='inputGroup'
					type='text'
					name='username'
					placeholder='Username'
					/>

				<input
					className='inputGroup'
					type='password'
					name='password'
					placeholder='Password'
					/>
				<input type='submit' />
			</form>
		</container>
	</div>
	</div>
	)
}

export default RegistrationForm
