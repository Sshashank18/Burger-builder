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
            cheese:0,
            salad:0,
            bacon:0,
            meat:0
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


    removeIngredientHandler = (type)=>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type]=updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients});

    }


    render(){

        const disabledInfo={
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        //it would be like {'salad':true,'cheese':false,...}

        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;