import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error:false
};

const INGREDIENT_PRICES = {           //Set global bcz it will not be changed
    cheese:0.5, 
    salad:0.4,
    meat:1.3,
    bacon:0.7
}

const reducer = (state = initialState, actions) => {
    switch(actions.type){
        case actionTypes.ADD_INGREDIENT:
            const updatedIngredient= { [actions.ingredientName]: state.ingredients[actions.ingredientName] + 1}
            const updatedIngredients = updateObject(state.ingredients,updatedIngredient);
            const updatedState = {
                ingredients: updatedIngredients,
                totalPrice:state.totalPrice + INGREDIENT_PRICES[actions.ingredientName] 
            }
            return updateObject(state,updatedState);
        case actionTypes.REMOVE_INGREDIENT:
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [actions.ingredientName]:state.ingredients[actions.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[actions.ingredientName] 
            };
        case actionTypes.SET_INGREDIENTS:
            return{
                ...state,
                ingredients: {                                      //Doing this way because to order the ingredients in the same order as given here
                    salad: actions.ingredients.salad,
                    bacon: actions.ingredients.bacon,
                    cheese: actions.ingredients.cheese,
                    meat: actions.ingredients.meat
                },
                totalPrice:4,
                error: false
            };
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return{
                ...state,
                error: true
            }
        default:
            return state;
    }
};

export default reducer;