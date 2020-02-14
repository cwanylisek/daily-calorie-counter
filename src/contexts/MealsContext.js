import React, { createContext, useState, useEffect } from 'react';
import uuid from 'uuid';

export const MealsContext = createContext();

const MealsContextProvider = props => {
    const [meals, setMeals] = useState([
        { id: uuid(), value: 'rice', label: 'Rice', kcal: 351, portion: 100 },
        { id: uuid(), value: 'chicken breast', label: 'Chicken breast', kcal: 164, portion: 100 },
        { id: uuid(), value: 'beef', label: 'Beef', kcal: 250, portion: 100 }
    ]);

    const [todayMeals, setTodayMeals] = useState([]);

    const [caloriesCount, setCaloriesCount] = useState([0]);

    const addTodayMeal = (newMeal) => {
        setTodayMeals([...todayMeals, newMeal])
    };

    const removeMeal = (index) => {
        let todayMealsNew = todayMeals
        todayMealsNew.splice(index, 1)
        setTodayMeals([...todayMealsNew])
    };

    const changePortion = async (portion, kcal, id) => {

        const sum = (kcal * portion) / 100
        setTodayMeals(todayMeals.map(item => item.id === id ? { ...item, newKcal: sum } : item))

    };

    useEffect(() => {

        if (todayMeals.length > 0) {
            const sum = todayMeals.map(item => item.newKcal ? item.newKcal : item.kcal).reduce((a, b) => { return a + b })
            setCaloriesCount(sum)
        }
       
    }, [todayMeals]);

    return (
        <MealsContext.Provider value={{ meals, setMeals, todayMeals, addTodayMeal, removeMeal, changePortion, caloriesCount }}>
            {props.children}
        </MealsContext.Provider>
    )
}

export default MealsContextProvider