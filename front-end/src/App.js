// ------- Dependencies ----------
import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'

// pragmatic learning and thinking
// -------Styling ---------
import './App.css';

// ------ Hooks ----------
import { axiosWithAuth } from './utils/axiosWithAuth'
import { PrivateRoute } from './components/PrivateRoute'

// -----History-----
import history from './history';

//----- Components -------
import Login from './components/Login'
import Register from './components/Register'
import { Dashboard } from './components/Dashboard'
import { AddFoodForm } from './components/AddFoodForm'
import UserContext from './components/UserContext'
import TabNav from './components/TabNav'

// const foodArray = [
// 	{catFood: {
// 		date: '',
// 		dairy: '',
// 		fruits: '',
// 		grains: '',
// 		proteins: '',
// 		vegetables: '',
// 		treats: ''
// 	}},
// ]

//  -------- func ---------
function App() {
	const [petFoodLog, setPetFoodLog] = useState([])
	const [changeMade, setChange] = useState('')

	useEffect(() => {
		
			axiosWithAuth()
				.get(
					`https://gigapet2021.herokuapp.com/api/meals`
					// localStorage.getItem('token')
				)
				.then(res => {
					setPetFoodLog(res.data)
				})
				.catch(err => console.log(err.res, 'Err'))
		
	}, [changeMade])

	return (
		<div className='App'>
			<TabNav />
			<UserContext.Provider value={{ petFoodLog, setChange, setPetFoodLog }}>
				{/* <h2> It's working in App.js {hardCode}</h2> */}
				<Route exact path='/login' component={Login} />
				<Route exact path='/register' component={Register} />
				{/* <Link path='/login' component={Login} />
        <Link path='/register' component={Register} />  */}
				<PrivateRoute exact path='/' component={Dashboard} />
				<PrivateRoute exact path='/meals' component={AddFoodForm} />
			</UserContext.Provider>
		</div>
	)
}

export default App
