import React, { createContext, useState, useEffect } from 'react';
import moment from 'moment';
import Food from '../data/Food';

export const MealsContext = createContext();

const MealsContextProvider = props => {
    const [meals, setMeals] = useState(Food);

    const [todayMeals, setTodayMeals] = useState([]);

    const [caloriesCount, setCaloriesCount] = useState([0]);

    const [savedMeals, setSavedMeals] = useState([]);

    const addTodayMeal = (newMeal) => {

        let today = moment();
        today = today.format('DD-MM-YYYY');

        setTodayMeals([...todayMeals, { ...newMeal, date: today }])
    };

    const removeMeal = (index) => {
        let todayMealsNew = todayMeals
        todayMealsNew.splice(index, 1)
        setTodayMeals([...todayMealsNew])
    };

    const changePortion = async (portion, kcal, id) => {

        const sum = Math.floor((kcal * portion) / 100)
        setTodayMeals(todayMeals.map(item => item.id === id ? { ...item, newKcal: sum } : item))

    };

    useEffect(() => {
        
        const getLsMeals = JSON.parse(localStorage.getItem('meals'));
        setSavedMeals(getLsMeals);

    }, [meals]);

    useEffect(() => {

        if (todayMeals.length > 0) {
            const sum = todayMeals.map(item => item.newKcal ? item.newKcal : item.kcal).reduce((a, b) => { return a + b })
            setCaloriesCount(Math.floor(sum))
        } else {
            setCaloriesCount(0)
        }

        //save data to LS

        try {

            const combineMeals = [...savedMeals, ...todayMeals]
            const serializedState = JSON.stringify(combineMeals);
            localStorage.setItem('meals', serializedState);

        }
        catch (err) {
            return console.log(err);
        }

    }, [todayMeals, savedMeals]);

    return (
        <MealsContext.Provider value={{ meals, setMeals, todayMeals, addTodayMeal, removeMeal, changePortion, caloriesCount, savedMeals }}>
            {props.children}
        </MealsContext.Provider>
    )
}

export default MealsContextProvider