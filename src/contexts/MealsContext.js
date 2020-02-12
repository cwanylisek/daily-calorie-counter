import React, { createContext, useState } from 'react';
import uuid from 'uuid';

export const MealsContext = createContext();

const MealsContextProvider = props => {
    const [meals, setMeals] = useState([
        { id: uuid(), value: 'rice', label: 'Rice', kcal: 351, portion: 100},
        { id: uuid(), value: 'chicken breast', label: 'Chicken breast', kcal: 164, portion: 100},
        { id: uuid(), value: 'beef', label: 'Beef', kcal: 250, portion: 100}
    ]);

    const [todayMeals, setTodayMeals] = useState([])

    const addTodayMeal = (newMeal) => {
        setTodayMeals([...todayMeals, newMeal])
    }

    return (
        <MealsContext.Provider value={{ meals, setMeals, todayMeals, addTodayMeal }}>
            {props.children}
        </MealsContext.Provider>
    )
}

export default MealsContextProvider