import React from 'react';
// import PropTypes from 'prop-types';
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = props => {
    let ingredientsArray = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        })
    }).reduce((prevArr, element) => {
        return prevArr.concat(element);
    }, []);

    console.log(ingredientsArray);

    if (ingredientsArray.length === 0) {
        ingredientsArray = <p>Please, start to add ingredients</p>;
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {ingredientsArray}
            <BurgerIngredient type="bread-bottom" />

        </div>
    );
};

// Burger.propTypes = {

// };

export default Burger;