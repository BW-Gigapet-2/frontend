import React, { useContext, useState, useEffect } from 'react';
import { AddFoodForm } from './AddFoodForm';

// components
import img from '../img/a.png';

// State - Context
import { UserContext } from './UserContext';

// Styling?

// --- component ---
export const Dashboard = props => {
    
    const { petFoodLog } = useContext(UserContext);
    const [ petLevel, setPetLevel ] = useState(0);

    // useEffect(() => {
    //     let fedPet = petFoodLog.filter(e => e.feeding_date === Date.now()).length;
        
    //     if (fedPet === 0) setPetLevel(0);
    //     if (fedPet === 1) setPetLevel(1);
    //     if (fedPet > 2) setPetLevel(2);
    // }, [petFoodLog])

return (
    <div className='dashboard-page'>
        <div className='dashboard-cont'>
        <h1>Gigapet Dashboard</h1>
        <img src={img}/>
        <h3> Your Daily Pet Level:</h3>
        
        <h3>Food entries:</h3>
        
        </div>
    </div>
)
}