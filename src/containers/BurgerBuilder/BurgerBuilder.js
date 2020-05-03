import React, { Component } from 'react';
import Aux from './hoc/Aux';

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
                <div>Burger</div>
                <div>Burger Tools</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;