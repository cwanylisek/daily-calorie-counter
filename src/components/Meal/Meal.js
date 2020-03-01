import React, { Fragment } from 'react';
import Inputbar from '../Inputbar/Inputbar';
import TodayMeal from '../TodayMeal/TodayMeal';
import DailyBalance from '../DailyBlanace/DailyBalance';

const Meal = () => {

    return (
        <Fragment>
            <Inputbar />
            <TodayMeal />
            <DailyBalance />
        </Fragment>
    )

};

export default Meal;