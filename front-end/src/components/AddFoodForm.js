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
            {/* <label htmlFor='dairy'>Dairy:</label>
                <input
                    type="text"
                    name="dairy"
                    placeholder="New task here..."
                    value={this.state.dairy}
                    onChange={this.handleChanges}
                    />
                <input
                    type="text"
                    name="dairynum"
                    placeholder="New task here..."
                    value={this.state.dairynum}
                    onChange={this.handleChanges}
                    />
            <label htmlFor='fruits'>Fruits:</label>
                <input
                type="text"
                name="fruits"
                placeholder="Name of fruit"
                value={this.state.fruits}
                onChange={this.handleChanges}
                />
                <input
                    type="text"
                    name="fruitsnum"
                    placeholder="Num of fruit"
                    value={this.state.fruitsnum}
                    onChange={this.handleChanges}
                    />
            <label htmlFor='grains'>Grains:</label>
                <input
                type="text"
                name="grains"
                placeholder="Name of grains"
                value={this.state.grains}
                onChange={this.handleChanges}
                />
                <input
                    type="text"
                    name="grainsnum"
                    placeholder="Num of Grains"
                    value={this.state.grainsnum}
                    onChange={this.handleChanges}
                    />
            <label htmlFor='proteins'>Proteins:</label>
                <input
                type="text"
                name="proteins"
                placeholder="Name of Protein."
                value={this.state.proteins}
                onChange={this.handleChanges}
                />
                <input
                    type="text"
                    name="proteinsnum"
                    placeholder="Number of proteins"
                    value={this.state.proteinsnum}
                    onChange={this.handleChanges}
                    />
            <label htmlFor='vegetables'>vegetables:</label>
                <input
                type="text"
                name="vegetables"
                placeholder="Name of Vegetables"
                value={this.state.vegetables}
                onChange={this.handleChanges}
                />
                <input
                    type="text"
                    name="vegetablesnum"
                    placeholder="# of Vegetables"
                    value={this.state.vegetablesnum}
                    onChange={this.handleChanges}
                    />
            <label htmlFor='treats'>Treats:</label>
                <input
                type="text"
                name="treats"
                placeholder="Name of Treats"
                value={this.state.treats}
                onChange={this.handleChanges}
                />
                <input
                    type="text"
                    name="treatssnum"
                    placeholder="Number of Treats"
                    value={this.state.treatsnum}
                    onChange={this.handleChanges}
                    /> */}

                    <button> Add </button>
            </form>
        );
    };

}

export default AddFoodForm;



// dairy, “fruits”, “grains”, “proteins”, “vegetables”, “treats”