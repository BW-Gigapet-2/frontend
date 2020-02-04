import React, { useContext, useState, useEffect } from 'react';
import { AddFoodForm } from './AddFoodForm';

// components
import img from '../img/a.png';

// State - Context
import { UserContext } from './UserContext';

// Styling?

// --- component ---
export const Dashboard = props => {
    // chart when ready to use this
    const { petFoodLog } = useContext(UserContext);
    const [  chartData, setChartData ] = useState(petFoodLog);
    // time
    const [ spanOfTime, setSpanOfTime ] = useState('total');
    const timeSpan = ['total', 'month', 'day'];
    // pet level up
    const [ petLevel, setPetLevel ] = useState(0);

    useEffect(() => {
        let fedPet = petFoodLog.filter(e => e.feeding_date === Date.now()).length;
        
        if (fedPet === 0) setPetLevel(0);
        if (fedPet === 1) setPetLevel(1);
        if (fedPet > 2) setPetLevel(2);
    }, [petFoodLog])

    // --- day, week, month useEffect ---
    // useEffect(() => {
    //     switch(spanOfTime) {
    //         case timeSpan[0]:
    //             return setChartData(petFoodLog);
    //         case timeSpan[1]:
    //             return setChartData(petFoodLog.filter(
    //                 e => e.feeding_date.split('-')[1] === getCurrentDate.split('-')[1]
    //             ))
    //     }
    // })


return (
    <div>
        <h1>Gigapet Dashboard</h1>
        <img src={img}/>
        <h3> Your Daily Pet Level:</h3>
        <div petLevel = {petLevel} />
        {/* <button component={AddFoodForm}>Feed Your Pet</button> */}
        <h3>Today's food entries:</h3>
        <div>Here's where food entry will be</div>
        {/* map function that shows today's intake */}
        <h3>This week's food entries:</h3>
        {/* map function that shows this week's intake */}
        <h3>This month's food entries:</h3>
        {/* map function that shows this month's intake */}
    </div>
)
}