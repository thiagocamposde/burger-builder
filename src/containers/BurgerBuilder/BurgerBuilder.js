import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENTS_PRICES = { salad: 1, bacon: 3, cheese: 2, meat: 5 };

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 4,
            purchasable: false
        }
    }

    updatePurchaseState(ingredients) {

        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey];
        }).reduce((sum, ele) => {
            return sum + ele;
        }, 0);

        this.setState({ purchasable: sum > 0 })
    }

    addIngredientHandler = (type) => {
        let oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        let updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENTS_PRICES[type];
        const newPrice = this.state.totalPrice + priceAddition;

        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
        this.updatePurchaseState(updatedIngredients);

    }

    removeIngredientHandler = (type) => {
        let oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        let updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;
        const oldPrice = INGREDIENTS_PRICES[type];
        const newPrice = this.state.totalPrice - oldPrice;

        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
        this.updatePurchaseState(updatedIngredients);
    }

    render() {
        let disabledItems = { ...this.state.ingredients }
        for (let key in disabledItems) {
            disabledItems[key] = disabledItems[key] <= 0;
        }
        return (
            <React.Fragment>
                <Modal >
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    disabledItems={disabledItems}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                />
            </React.Fragment>
        );
    };
}

export default BurgerBuilder;