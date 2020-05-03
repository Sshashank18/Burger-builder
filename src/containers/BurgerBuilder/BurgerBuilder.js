import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';
import Aux from '../../hoc/Auxi';

const INGREDIENT_PRICES = {           //Set global bcz it will not be changed
    cheese:0.5, 
    salad:0.4,
    meat:1.3,
    bacon:0.7
}

class BurgerBuilder extends Component{

    state={
        ingredients:{
            cheese:1,
            salad:1,
            bacon:0,
            meat:1
        },
        totalPrice:4
    }
    
    addIngredientHandler = (type)=>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type]=updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
    }

    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControls 
                    ingredientAdded={this.addIngredientHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;