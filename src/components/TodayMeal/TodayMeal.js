import React, { useContext } from 'react';
import { MealsContext } from '../../contexts/MealsContext';
import './TodayMeal.scss';

const TodayMeal = () => {

    const { todayMeals, removeMeal, changePortion } = useContext(MealsContext)

    const removeMealHandler = (id) => {
        removeMeal(id)
    }

    const changePortionHandler = (e) => {

        const portion = e.target.value
        const kcal = e.target.getAttribute('kcal')
        const id = e.target.id

        changePortion(portion, kcal, id)
    }


    const displayMeals = todayMeals.map((item, index) => { //todo: change key, dont use index
        return (
            <div className="todaymeal__meal" key={index}>
                <h1 className="todaymeal__title">{item.label}</h1>
                <form className="todaymeal__specifications">
                    <span><input type="number" min="1" max="9999" defaultValue={item.portion} name="portion" kcal={item.kcal} id={item.id} onChange={changePortionHandler} /> g</span>
                    <span>{item.kcal} kcal</span>
                    <span onClick={removeMealHandler}>remove</span>
                </form>
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