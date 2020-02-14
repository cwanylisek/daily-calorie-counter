import React, { useContext } from 'react';
import { MealsContext } from '../../contexts/MealsContext';
import './DailyBalance.scss';

const DailyBalance = () => {
    const { caloriesCount } = useContext(MealsContext);

    return (
        <div className="daily-balance__container">
            today you eated: {caloriesCount} kalories
        </div>
    )
}

export default DailyBalance;