import React, { createContext, useState, useEffect } from 'react';

export const ChartContext = createContext();

const ChartContextProvider = props => {

    const [data, setData] = useState();
    const [labels, setLabels] = useState();

    useEffect(() => {

        //load data from LS

        const loadDataFromLs = JSON.parse(localStorage.getItem('meals'));
        const neededValues = loadDataFromLs.map(({ date, kcal }) => ({ date, kcal }));
        console.log(neededValues)

        const result = Object.values(neededValues.reduce((val, { kcal, date }) => {
            if (!val[date])
                val[date] = Object.assign({}, { kcal, date });
            else
                val[date].kcal += kcal;
            return val;
        }, {}));

        // destructuring for two separate arrays
        const data = result.map(({ kcal }) => kcal);
        const labels = result.map(({ date }) => date);

        setData(data);
        setLabels(labels)

    }, []);

    return (
        <ChartContext.Provider value={{ data, labels }}>
            {props.children}
        </ChartContext.Provider>
    )
}

export default ChartContextProvider