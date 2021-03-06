import * as actionTypes from './actionTypes';
import axios from '../../axios-order';


export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
};

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
};

export const setIngredients = (ingredients) => {
    return{
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    };
};

export const fetchIngredientsFailed = () => {
    return{
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    };
};

export const initIngredients = () => {
    return dispatch => {
        // axios.get('https://react-my-burger-builder-13255.firebaseio.com/ingredients.json')
        axios.get('/getIngredients')
        .then(response => {
            dispatch(setIngredients(response.data.ingredients));
        })
        .catch(error=>{
            dispatch(fetchIngredientsFailed());
        })
    };
};
