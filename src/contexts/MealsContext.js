import React, { createContext, useState, useEffect } from 'react';
import moment from 'moment';
import Food from '../data/Food';

export const MealsContext = createContext();

const MealsContextProvider = props => {
    const [meals, setMeals] = useState(Food);

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

        const sum = Math.floor((kcal * portion) / 100)
        setTodayMeals(todayMeals.map(item => item.id === id ? { ...item, newKcal: sum } : item))

    };

    useEffect(() => {

        if (todayMeals.length > 0) {
            const sum = todayMeals.map(item => item.newKcal ? item.newKcal : item.kcal).reduce((a, b) => { return a + b })
            setCaloriesCount(Math.floor(sum))
        } else {
            setCaloriesCount(0)
        }

        console.log('todayMeals cahnged!')

        //save data to LS
        let today = moment();
        today = today.format('DD-MM-YYYY');

        try {

            const serializedState = JSON.stringify(todayMeals);
            localStorage.setItem(today, serializedState);

        }
        catch (err) {
            return console.log(err);
        }

        // load data from LS
        console.log(localStorage.getItem(today), 'powinien byc dzisiejszy obiekt')
        // if (today == localStorage.getItem(today)) {
        //     try {
        //         const serializedState = localStorage.getItem(state);
        //         if(serializedState === null){
        //             return undefined;
        //         }
        //         console.log(JSON.parse(serializedState))
        //         return JSON.parse(serializedState);
        //     } catch (err) {
        //         return undefined;
        //     }
        // }


    }, [todayMeals]);

    return (
        <MealsContext.Provider value={{ meals, setMeals, todayMeals, addTodayMeal, removeMeal, changePortion, caloriesCount }}>
            {props.children}
        </MealsContext.Provider>
    )
}

export default MealsContextProvider