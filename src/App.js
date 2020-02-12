import React from 'react';
import MealsContextProvider from './contexts/MealsContext';
import './App.scss';
import Inputbar from './components/Inputbar/Inputbar';

function App() {
    return (
        <div className="App">
            <MealsContextProvider>
                <Inputbar />
            </MealsContextProvider>
        </div>
    );
}

export default App;
