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

    const removeMeal = (index) => {
        let todayMealsNew = todayMeals
        todayMealsNew.splice(index, 1)
        setTodayMeals([...todayMealsNew])
    }

    return (
        <MealsContext.Provider value={{ meals, setMeals, todayMeals, addTodayMeal, removeMeal }}>
            {props.children}
        </MealsContext.Provider>
    )
}

export default MealsContextProvider