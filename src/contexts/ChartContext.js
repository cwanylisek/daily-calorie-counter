import React, { createContext, useState, useEffect } from 'react';

export const ChartContext = createContext();

const ChartContextProvider = props => {
    const [mealsHistory, setMealsHistory] = useState([]);

    useEffect(() => {

        //load data from LS

        const serializedState = JSON.parse(localStorage.getItem('meals'));
        console.log(serializedState, 'serizalized state')
        const neededData = serializedState.map(item => [ item.date, item.kcal]);
        console.log(neededData, 'nd')
        setMealsHistory(serializedState)
        
    }, []);

    return (
        <ChartContext.Provider value={{ mealsHistory }}>
            {props.children}
        </ChartContext.Provider>
    )
}

export default ChartContextProvider