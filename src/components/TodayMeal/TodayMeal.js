import React, { useContext } from 'react';
import { MealsContext } from '../../contexts/MealsContext';
import './TodayMeal.scss';

const TodayMeal = () => {

    const { todayMeals, removeMeal } = useContext(MealsContext)

    const removeMealHandler = (id) => {
        removeMeal(id)
    }

    const displayMeals = todayMeals.map((item, index) => {
        return (
            <div className="todaymeal__meal" key={item.id}>
                <h1 className="todaymeal__title">{item.label}</h1>
                <div className="todaymeal__specifications">
                    <span>kcal {item.kcal}</span>
                    <span onClick={removeMealHandler}>remove</span>
                </div>
            </div>
        )
    })

    return (
        <div className="todaymeal__container">
            {displayMeals}
        </div>
    )
}

export default TodayMeal;