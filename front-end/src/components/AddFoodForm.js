import React, { Component } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import history from '../history';


export class AddFoodForm extends Component {
	constructor() {
		super()
		this.state = {
			
			date: '',
			category: '',
			servings: '',
			name: ''
			
		}
	}
	
	handleChanges = e => {
		this.setState({
				...this.state.name,
				[e.target.name]: e.target.value
		})
	}
	
	handleSubmit = e => {
		e.preventDefault()
		axiosWithAuth()
		.post(
			`https://gigapet2021.herokuapp.com/api/meals`,
			this.state
			)
			.then(res => {
				console.log('Meal added', res)
				history.push(`/meals`)
			})
			.catch(err => console.log(err, 'err'))
			
		}
		

	render() {

		return (
			<form onChange={this.handleChange} onSubmit={this.handleSubmit}>
			{console.log(this.state)}
				<label> Date: </label>
				<input
					type='date'
					name='date'
					value={this.date}
					placeholder='date'
					onChange={this.handleChanges}
				/>
				<label>Category</label>
				<select name='category' value={this.category} onChange={this.handleChanges}>
					<option value='dairy'>dairy</option>
					<option value='fruit'>fruit</option>
					<option value='grains'>grains</option>
					<option value='vegetables'>vegetables</option>
					<option value='protein'>protein</option>
					<option value='treats'>treats</option>
				</select>
				<label>Servings</label>
				<select name='servings' value={this.servings} onChange={this.handleChanges}>
					<option value='0'>0</option>
					<option value='1'>1</option>
					<option value='2'>2</option>
					<option value='3'>3</option>
				</select>

				<label>Name of food:</label>
				<input 
					onChange={this.handleChange}
					type= 'text'
					name= 'name'
					placeholder='Name of food'
					value={this.name}
					/>
				
				<button> Add </button>
			</form>
		)
	}
}

export default AddFoodForm;

// dairy, “fruits”, “grains”, “proteins”, “vegetables”, “treats”
