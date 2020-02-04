// ------- Dependencies ----------
import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Link, Switch} from 'react-router-dom';

// -------Styling ---------
import './App.css';

// ------ Hooks ----------
import { axiosWithAuth } from './utils/axiosWithAuth';
import { PrivateRoute } from './components/PrivateRoute';


//----- Components -------
import Login from './components/Login';
import Register from './components/Register';
import { FoodLog } from './components/FoodLog';
import { Dashboard } from './components/Dashboard';
import { AddFoodForm } from './components/AddFoodForm';
import UserContext from './components/UserContext';

//  -------- func ---------
function App() {

const [petFoodLog, setPetFoodLog] = useState([]);
const [changeMade, setChange] = useState('');

useEffect(() => {
  if (localStorage.getItem('token')){
    axiosWithAuth()
    .get(`/auth/${localStorage.getItem('parent_id')}/parents`, localStorage.getItem('token'))
    .then(res => {
      setPetFoodLog(res.data);
    })
    .catch(err => console.log(err.res, 'Err'))
  }
}, []);

  return (
    <div className="App">
      <UserContext.Provider value={{petFoodLog,setChange, setPetFoodLog, foodState, setFoodState}}>
      <nav>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        {/* <PrivateRoute path='/dashboard' component={Dashboard} /> */}
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/foodlog' component={FoodLog} />
      </nav>
      </UserContext.Provider>
    </div>
  );
}

export default App;
