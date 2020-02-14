import React from 'react';
import MealsContextProvider from './contexts/MealsContext';
import './App.scss';
import Inputbar from './components/Inputbar/Inputbar';
import TodayMeal from './components/TodayMeal/TodayMeal';
import DailyBalance from './components/DailyBlanace/DailyBalance';


function App() {
    return (
        <div className="App">
            <MealsContextProvider>
                <Inputbar />
                <TodayMeal />
                <DailyBalance />
            </MealsContextProvider>
        </div>
    );
}

export default App;
