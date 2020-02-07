import React, { useContext, useState, useEffect } from 'react';
import { AddFoodForm } from './AddFoodForm';

// components
import img from '../img/a.png';
import '../styling/Dashboard.css';
// State - Context
import { UserContext } from './UserContext';

// Styling?

// --- component ---
export const Dashboard = props => {
    
return (
    <div className='dashboard-page'>
        <div className='dashboard-cont'>
        <h1>Gigapet Dashboard</h1>
        <img src={img}/>
        </div>
    </div>
)
}