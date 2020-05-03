import React, { Component } from 'react';
import Auxi from './hoc/Aux';

class BurgerBuilder extends Component{
    render(){
        return(
            <Auxi>
                <div>Burger</div>
                <div>Burger Tools</div>
            </Auxi>
        );
    }
}

export default BurgerBuilder;