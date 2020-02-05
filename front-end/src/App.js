// ------- Dependencies ----------
import React, { useState, useEffect, useContext } from 'react';
import { Route, Router, Link, Switch } from 'react-router-dom';


// pragmatic learning and thinking
// -------Styling ---------
import './App.css';

// ------ Hooks ----------
import { axiosWithAuth } from './utils/axiosWithAuth';
import { PrivateRoute } from './components/PrivateRoute';

// -----History-----
import history from './history';


//----- Components -------
import Login from './components/Login';
import Register from './components/Register';
import { FoodLog } from './components/FoodLog';
import { Dashboard } from './components/Dashboard';
import { AddFoodForm } from './components/AddFoodForm';
import UserContext from './components/UserContext';

// Hard Code
const hardCode = [
  1
]

//  -------- func ---------
function App() {

// const userHist = useContext(UserContext)
const [petFoodLog, setPetFoodLog] = useState([]);
const [changeMade, setChange] = useState('');
// const hist = useContext().history;
useEffect(() => {
if (!localStorage.getItem.token) {
  // debugger;
  history.push('/login')
}
})
//   if (localStorage.getItem('token')){
//   //   axiosWithAuth()
//   //   .get(`/auth/login`, localStorage.getItem('token'))
//   //   .then(res => {
//   //     setPetFoodLog(res.data);
//   //   })
//   //   .catch(err => console.log(err.res, 'Err'))
//   // }
// }, [changeMade]);

  return (
    <div className="App">
      <UserContext.Provider value={{petFoodLog,setChange, setPetFoodLog}}>

        {/* <h2> It's working in App.js {hardCode}</h2> */}
        <Router history={history}>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
        {/* <Link path='/login' component={Login} />
        <Link path='/register' component={Register} />  */}
        <PrivateRoute exact path='/' component={Dashboard} />
        {/* <PrivateRoute exact path='/' component={AddFoodForm} /> */}
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
