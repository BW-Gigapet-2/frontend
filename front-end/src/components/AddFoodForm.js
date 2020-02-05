import React, { Component } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export class AddFoodForm extends Component {
    constructor() {
        super();
        this.state = {
            addFood: {
            feeding_date: '',
            food_category: '',
            food_number: '',
            food_name: ''
            }
        };
    }

    handleChanges = e => {
        this.setState({
            ...this.state.addFood,
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post(`/auth/${localStorage.getItem('parents')}/food/${this.state}`, this.state.addFood)
        .then(res => {
            this.setChange(this.setState())
        })
        .catch(err => console.log(err, 'err'));
        // this.props.addFood(this.state.addFood);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type='date'
                    name="feeding_date"
                    value={this.state.feeding_date}
                    placeholder="What is the date you fed your pet on?"
                    onChange={this.state.handleChanges}
                    />
                <select name='food_category' onChange={this.state.handleChanges}>
                    <option value="dairy">Dairy</option>
                    <option value="fruit">Fruit</option>
                    <option value="vegetable">vegetable</option>
                    <option value="grain">grain</option>
                    <option value="treat">treat</option>
                </select>
                <select name='food_number' onChange={this.state.handleChanges}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>
                <input 
                    type='text'
                    name="food_name"
                    value={this.state.food_name}
                    placeholder="What food did you give your pet?"
                    onChange={this.state.handleChanges}
                    />

                    <button onSubmit={this.handleSubmit}> Add </button>
            </form>
        );
    };

}

export default AddFoodForm;



// dairy, “fruits”, “grains”, “proteins”, “vegetables”, “treats”