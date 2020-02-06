import React, { Component } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

export class AddFoodForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			
			date: '',
			category: '',
			servings: '',
			// name: '',
			// pet_id: petId
			
		}
	}

	
	
	handleChanges = e => {
		this.setState({
				...this.state,
				[e.target.name]: e.target.value

		})
	}
	
	handleSubmit = e => {
		e.preventDefault()
		axiosWithAuth()
		.post(
			`https://gigapet2021.herokuapp.com/api/meals`,
			this.state.date
			)
			.then(res => {
				this.setChange(this.setState())
			})
			.catch(err => console.log(err, 'err'))
			
		}
		

	render() {

		return (
			<form onSubmit={this.handleSubmit}>
			{console.log(this.state)}
				<label> Date: </label>
				<input
					type='date'
					name='date'
					value={this.state.date}
					placeholder='date'
					onChange={this.handleChanges}
				/>
				<label>Category</label>
				<select name='category' value={this.state.category} onChange={this.handleChanges}>
					<option value='dairy'>dairy</option>
					<option value='fruit'>fruit</option>
					<option value='grains'>grains</option>
					<option value='vegetables'>vegetables</option>
					<option value='protein'>protein</option>
					<option value='treats'>treats</option>
				</select>
				<label>Servings</label>
				<select name='servings' value={this.state.servings} onChange={this.handleChanges}>
					<option value='0'>0</option>
					<option value='1'>1</option>
					<option value='2'>2</option>
					<option value='3'>3</option>
				</select>
				{/* <label>Grains</label>
				<select name='grains' onChange={this.handleChanges}>
					<option value='0'>0</option>
					<option value='1'>1</option>
					<option value='2'>2</option>
					<option value='3'>3</option>
				</select>
				<label>Proteins</label>
				<select name='proteins' onChange={this.handleChanges}>
					<option value='0'>0</option>
					<option value='1'>1</option>
					<option value='2'>2</option>
					<option value='3'>3</option>
				</select> */}



				<button> Add </button>
			</form>
		)
	}
}

export default AddFoodForm;

// dairy, “fruits”, “grains”, “proteins”, “vegetables”, “treats”
