import React, { createContext, useState } from 'react';

export const ChartContext = createContext();

const ChartContextProvider = props => {
    const [mealsHistory, setMealsHistory] = useState();

    return (
        <ChartContext.Provider value={{ mealsHistory }}>
            {props.children}
        </ChartContext.Provider>
    )
}

export default ChartContextProvider