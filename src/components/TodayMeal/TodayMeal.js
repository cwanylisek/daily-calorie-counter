import React, { useContext } from 'react';
import { MealsContext } from '../../contexts/MealsContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice, faHamburger, faEgg, faBreadSlice, faHotdog, faBacon, faDrumstickBite } from '@fortawesome/free-solid-svg-icons';
import './TodayMeal.scss';

const TodayMeal = () => {

    const { todayMeals, removeMeal, changePortion } = useContext(MealsContext);

    const removeMealHandler = (id) => {
        removeMeal(id);
    };

    const changePortionHandler = (e) => {

        const portion = e.target.value
        const kcal = e.target.getAttribute('kcal')
        const id = e.target.id

        changePortion(portion, kcal, id);
    };

    const iconRandom = [faPizzaSlice, faHamburger, faEgg, faBreadSlice, faHotdog, faBacon, faDrumstickBite];

    const displayMeals = todayMeals.length > 0

        ? todayMeals.map((item, index) => { //todo: change key, dont use index

            const energyValue = item.newKcal ? item.newKcal : item.kcal

            return (
                <div className="today-meal__meal" key={index}>
                    <h1 className="today-meal__title">{item.label}</h1>
                    <form className="today-meal__specifications">
                        <span><input className="today-meal__input" type="number" min="1" max="9999" defaultValue={item.portion} name="portion" kcal={item.kcal} id={item.id} onChange={changePortionHandler} /> g</span>
                        <span className="today-meal__value"><strong>{energyValue}</strong> kcal</span>
                        <div className="today-meal__delete" onClick={removeMealHandler}></div>
                    </form>
                </div>
            )
        })

        : <p className="today-meal__placeholder">Choose some eated <FontAwesomeIcon icon={iconRandom[Math.floor(Math.random() * iconRandom.length)]} size="2x" /></p>;



    return (
        <div className="today-meal__container">
            {displayMeals}
        </div>
    )
}

export default TodayMeal;