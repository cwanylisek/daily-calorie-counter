import React, { createContext, useState, useEffect } from 'react';
import moment from 'moment';

export const ChartContext = createContext();

const ChartContextProvider = props => {
    const [mealsHistory, setMealsHistory] = useState([]);

    useEffect(() => {

        let today = moment();
        today = today.format('DD-MM-YYYY');
        //load data from LS

        const serializedState = localStorage;
        console.log(serializedState, 'serizalized state')
        // let oneValue = serializedState[Object.keys(serializedState)[2]];
        // oneValue = JSON.parse(oneValue)
        // console.log(oneValue)
        // const onlyKcalDisplay = oneValue.map(item => item.newKcal);
        // console.log(onlyKcalDisplay)
        // if (serializedState != null) {
        //     setMealsHistory(serializedState)
        // };

    }, []);

    return (
        <ChartContext.Provider value={{ mealsHistory }}>
            {props.children}
        </ChartContext.Provider>
    )
}

export default ChartContextProvider