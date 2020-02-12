import React, { createContext, useState } from 'react';
import uuid from 'uuid';

export const MealsContext = createContext();

const MealsContextProvider = props => {
    const [meals, setMeals] = useState([
        { id: uuid(), value: 'rice', label: 'Rice', kcal: 351, portion: 100},
        { id: uuid(), value: 'chicken breast', label: 'Chicken breast', kcal: 164, portion: 100},
        { id: uuid(), value: 'beef', label: 'Beef', kcal: 250, portion: 100}
    ])

    return (
        <MealsContext.Provider value={{ meals }}>
            {props.children}
        </MealsContext.Provider>
    )
}

export default MealsContextProvider