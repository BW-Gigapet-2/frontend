import React, { Component } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

export class AddFoodForm extends Component {
	constructor() {
		super()
		this.state = {
			addFood: {
				date: '',
				dairy: '',
				fruits: '',
				grains: '',
				proteins: '',
				vegetables: '',
				treats: ''
			}
		}
	}

	
	
	handleChanges = e => {
		this.setState({
			addFood: {

				...this.state.addFood,
				[e.target.name]: e.target.value

			}
		})
	}
	
	handleSubmit = e => {
		e.preventDefault()
		axiosWithAuth()
		.post(
			`https://gigapet2020.herokuapp.com/api/parents/food/`,
			this.state.addFood
			)
			.then(res => {
				this.setChange(res.this.setState())
			})
			.catch(err => console.log(err, 'err'))
			// this.props.addFood(this.state.addFood);
		}
		

	render() {

		return (
			<form onSubmit={this.handleSubmit}>
			{console.log(this.state.addFood)}
				<label> Date: </label>
				<input
					type='date'
					name='date'
					value={this.state.date}
					placeholder='date'
					onChange={this.handleChanges}
				/>
				<label>Dairy</label>
				<select name='dairy' value={this.state.dairy} onChange={this.handleChanges}>
					<option value='0'>0</option>
					<option value='1'>1</option>
					<option value='2'>2</option>
					<option value='3'>3</option>
				</select>
				<label>Fruits</label>
				<select name='fruits' value={this.state.fruits} onChange={this.handleChanges}>
					<option value='0'>0</option>
					<option value='1'>1</option>
					<option value='2'>2</option>
					<option value='3'>3</option>
				</select>
				<label>Grains</label>
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
				</select>
				<label>Vegetables</label>
				<select name='vegetables' onChange={this.handleChanges}>
					<option value='0'>0</option>
					<option value='1'>1</option>
					<option value='2'>2</option>
					<option value='3'>3</option>
				</select>
				<label>Treats</label>
				<select name='treats' onChange={this.handleChanges}>
					<option value='0'>0</option>
					<option value='1'>1</option>
					<option value='2'>2</option>
					<option value='3'>3</option>
				</select>
				

{/* Delete func */}
			{/* <span className="delete" onClick={e => {
				e.stopPropagation();
				deleteFood(addFood)
				}
			}>
				x
			</span> */}


				<button> Add </button>
			</form>
		)
	}
}

export default AddFoodForm;

// dairy, “fruits”, “grains”, “proteins”, “vegetables”, “treats”
