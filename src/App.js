import React from 'react';
import MealsContextProvider from './contexts/MealsContext';
import './App.scss';
import { Route } from 'react-router';
import Meal from './components/Meal/Meal';
import Chart from './components/Charts/Chart';
import Navbar from './components/Navbar/Navbar';


function App() {
    return (
        <div className="App">
            <MealsContextProvider>
                <Navbar />
                <Route exact path="/" component={Meal} />
                <Route path="/chart" component={Chart} />
            </MealsContextProvider>
        </div>
    );
}

export default App;
