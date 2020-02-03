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
import { Dashboard } from './components/';
import { AddFoodForm } from './components/AddFoodForm';

//  -------- func ---------
function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
