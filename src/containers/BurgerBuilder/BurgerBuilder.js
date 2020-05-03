import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/Auxi';

class BurgerBuilder extends Component{

    state={
        ingredients:{
            cheese:0,
            salad:0,
            bacon:0,
            meat:0
        }
    }
    
    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Burger tools</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;