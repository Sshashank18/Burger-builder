import * as actionTypes from './actions';

const initialState = {
    ingredients: {
        cheese:0,
        salad:0,
        bacon:0,
        meat:0
    },
    totalPrice: 4,
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
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [actions.ingredientName]: state.ingredients[actions.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[actions.ingredientName] 
            };
        case actionTypes.REMOVE_INGREDIENT:
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [actions.ingredientName]:state.ingredients[actions.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[actions.ingredientName] 
            };
        default:
            return state;
    }
};

export default reducer;