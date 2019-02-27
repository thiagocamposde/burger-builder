import React from 'react';

const OrderSummary = (props) => {
    const ingredientsList = Object.keys(props.ingredients)
        .map(objKey => {
            return (
                <li key={objKey}>
                    <span style={{ textTransform: 'capitalize' }}>{objKey}</span>:{props.ingredients[objKey]}
                </li>
            );
        });

    return (
        <React.Fragment>
            <h1>Your Order</h1>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredientsList}
            </ul>
            <p>Continue to checkout?</p>
            <button>CANCEL</button>
            <button>CONTINUE</button>
        </React.Fragment>
    );
};

export default OrderSummary;