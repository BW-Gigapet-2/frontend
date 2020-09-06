import React, {Component, useState} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import history from '../history';
import '../styling/Card.css';


const initialFoods = {
    date: '',
    category: '',
    servings: '',
    name: ''
}

export const MealCard = ({allFood, updateFoods}) => {
    const [editing, setEditing] = useState(false);
    const [editedFood, setEditedFood] = useState(initialFoods);

    const handleUpdate = e => {
        setEditedFood({
            ...editedFood,
            [e.target.name]: e.target.value
        });
    };

    const editFood = item => {
        setEditing(true);
        setEditedFood(item)
    };

    const saveEdit = e => {
        e.preventDefault();

        axiosWithAuth()
        .put(`https://gigapet2021.herokuapp.com/api/meals/${editedFood.id}`, editedFood)
        .then(res => {
            console.log(res)
            setEditing(false)
            axiosWithAuth()
            .get(`https://gigapet2021.herokuapp.com/api/meals`)
            .then(res => {
                console.log(res)
                updateFoods(res.data);
            })
        })
        .catch(err => console.log('Error is in MealCard: Editing'))
    };

return (
    <div className='meal-section'>
        {allFood && allFood.map(item => (
            (editing && item.id === editedFood.id) ? (
                <div className='meal-card' key={editedFood.id}>
                    <div className='edit-card'>
                    <label> Date: </label>
                    <input
                        type='date'
                        name='date'
                        value={editedFood.date}
                        placeholder='date'
                        onChange={handleUpdate}
                    />
                    <label>Category</label>
				<select name='category' value={editedFood.category} onChange={handleUpdate}>
					<option value='pick_one'>Pick one</option>
					<option value='dairy'>dairy</option>
					<option value='fruit'>fruit</option>
					<option value='grains'>grains</option>
					<option value='vegetables'>vegetables</option>
					<option value='protein'>protein</option>
					<option value='treats'>treats</option>
				</select>
				<label>Servings</label>
				<select name='servings' value={editedFood.servings} onChange={handleUpdate}>
					<option value='0'>0</option>
					<option value='1'>1</option>
					<option value='2'>2</option>
					<option value='3'>3</option>
				</select>

				<label>Name of food:</label>
				<input 
					onChange={handleUpdate}
					type= 'text'
					name= 'name'
					placeholder='Name of food'
					value={editedFood.name}
					/>
				
				<button onClick={saveEdit}> Save </button>
            </div>
            </div>
            ) : 
                <div className='card' key={item.id}>
                    <h1> Food </h1>
                    <h3>Name: {item.name}</h3>
                    <h3>Servings: {item.servings}</h3>
                    <h3>Category: {item.category}</h3>
                    <h3>Date: {item.date}</h3> 
                    <button onClick={() => editFood(item)}>Edit</button>
                </div>
                
            
        ))}
    </div>
)
}

export default MealCard;