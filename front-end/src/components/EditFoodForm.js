import React, { useState } from "react";
import axios from "axios";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialFoods = {
        date: '',
        dairy: '',
        fruits: '',
        grains: '',
        proteins: '',
        vegetables: '',
        treats: ''
}

const EditFunc = ({ foods, updateFoods }) => {
console.log(foods);
const [editing, setEditing] = useState(false);
const [foodToEdit, setFoodToEdit] = useState(initialFoods);

const editFood = dairy => {
setEditing(true);
setFoodToEdit(dairy);
};

const saveEdit = e => {
e.preventDefault();

axiosWithAuth()
.put(`https://gigapet2020.herokuapp.com/api/parents/food/${}`, foodToEdit)
.then(() => {
    axiosWithAuth()
    .get(`https://gigapet2020.herokuapp.com/api/parents/food/`)
    .then(res => updateFoods(res.data))
    .catch(err => console.log('err', err))
    setEditing(false);
})
.catch((err) => {
    console.log('err', err)
})
};

const deleteColor = color => {
// make a delete request to delete this color
axiosWithAuth()
.delete(`http://localhost:5000/api/colors/${color.id}`)
.then(() => {
    alert('Color was deleted')
    axiosWithAuth()
    .get(`http://localhost:5000/api/colors`)
    .then(res => updateFoods(res.data))
    .catch(err => console.log('err', err))
    setEditing(false);
})
.catch((err) => {
    console.log('err', err)
})
};

return (
<div className="colors-wrap">
    <p>colors</p>
    <ul>
    {colors.map(color => (
        <li key={color.color} onClick={() => editColor(color)}>
        <span>
            <span className="delete" onClick={e => {
                e.stopPropagation();
                deleteColor(color)
                }
            }>
                x
            </span>{" "}
            {color.color}
        </span>
        <div
            className="color-box"
            style={{ backgroundColor: color.code.hex }}
        />
        </li>
    ))}
    </ul>
    {editing && (
    <form onSubmit={saveEdit}>
        <legend>edit color</legend>
        <label>
        color name:
        <input
            onChange={e =>
            setColorToEdit({ ...colorToEdit, color: e.target.value })
            }
            value={colorToEdit.color}
        />
        </label>
        <label>
        hex code:
        <input
            onChange={e =>
            setColorToEdit({
                ...colorToEdit,
                code: { hex: e.target.value }
            })
            }
            value={colorToEdit.code.hex}
        />
        </label>
        <div className="button-row">
        <button type="submit">save</button>
        <button onClick={() => setEditing(false)}>cancel</button>
        </div>
    </form>
    )}
    <div className="spacer" />
    {/* stretch - build another form here to add a color */}
</div>
);
};

export default ColorList;