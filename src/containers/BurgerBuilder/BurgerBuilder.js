import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';
import Aux from '../../hoc/Auxi';

class BurgerBuilder extends Component{

    state={
        ingredients:{
            cheese:1,
            salad:1,
            bacon:0,
            meat:1
        }
    }
    
    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControls />
            </Aux>
        );
    }
}

export default BurgerBuilder;