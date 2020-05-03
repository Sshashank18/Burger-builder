import React, { Component } from 'react';
import Aux from './hoc/Auxi';
import Burger from '../../components/Burger/Burger';


class BurgerBuilder extends Component{
    render(){

        state={
            ingredients:{
                salad:1,
                cheese:2,
                bacon:1,
                meat:1
            }
        }

        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Burger Tools</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;