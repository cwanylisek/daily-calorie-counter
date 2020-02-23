import React, { useContext } from 'react';
import { MealsContext } from '../../contexts/MealsContext';
import './DailyBalance.scss';

const DailyBalance = () => {
    const { caloriesCount } = useContext(MealsContext);

    return (
        <div className="daily-balance__container">
            <p>Today you eated: <strong className="daily-balance__score">{caloriesCount}</strong> kalories</p>
        </div>
    )
}

export default DailyBalance;