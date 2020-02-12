import React, { createContext, useState } from 'react';
import uuid from 'uuid';

export const MealsContext = createContext();

const MealsContextProvider = props => {
    const [meals, setMeals] = useState([
        { id: uuid(), meal: 'rice', kcal: 351, portion: 1}
    ])

    return (
        <MealsContext.Provider value={{ meals }}>
            {props.children}
        </MealsContext.Provider>
    )
}

export default MealsContextProvider