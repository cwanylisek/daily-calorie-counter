import React, { useContext } from 'react';
import { ChartContext } from '../../contexts/ChartContext';
import './Chart.scss';

const Chart = () => {

    const { mealsHistory } = useContext(ChartContext);

    return (
        <div className="chart__container">
            <p>test</p>
        </div>
    )

};

export default Chart;