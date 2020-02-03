import React, { createContext, useContext, useState, useEffect } from 'react';

// useContext
export const UserContext = createContext();


// --- component ---
export const Dashboard = props => {
    // chart
    const { petFoodLog } = useContext(UserContext);
    const [  chartData, setChartData ] = useState(petFoodLog);
    // time
    const [ spanOfTime, setSpanOfTime ] = useState('total');
    const timeSpan = ['total', 'month', 'day'];
    // pet level up
    const [ petLevel, setPetLevel ] = useState(0);

    useEffect(() => {
        let fedPet = petFoodLog.filter( e => e.feeding_date === Date.now()).length;
        
        if (fedPet === 0) setPetLevel(0);
        if (fedPet === 1) setPetLevel(1);
        if (fedPet === 2) setPetLevel(2);
        if (fedPet > 3) setPetLevel(3);
    }, [petFoodLog])

return (
    <div>
        <h1>Gigapet Dashboard</h1>
        <h3> Your Daily Pet Level:</h3>
        <div petLevel={petLevel} />
        <h3>Today's food entries:</h3>
        {/* map function that shows today's intake */}
        <h3>This week's food entries:</h3>
        {/* map function that shows this week's intake */}
        <h3>This month's food entries:</h3>
        {/* map function that shows this month's intake */}
    </div>
)
}