import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildContol/BuildControl';

const constrols = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]
const BuildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Burger price:{props.price.toFixed(2)}</p>
            {constrols.map(ctrl => {
                return <BuildControl
                    added={() => props.addIngredient(ctrl.type)}
                    removed={() => props.removeIngredient(ctrl.type)}
                    key={ctrl.label}
                    disabled={props.disabledItems[ctrl.type]}
                    label={ctrl.label} />
            })}
            <button disabled={!props.purchasable} className={classes.OrderButton}>ORDER NOW</button>
        </div>
    );
};

export default BuildControls;