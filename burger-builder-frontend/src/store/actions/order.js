import * as actionTypes from './actionTypes';
import axios from '../../axios-order';
import { useImperativeHandle } from 'react';

export const purchaseBurgerSuccess = (id, orderData) => {
    return{
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};

export const purchaseBurgerFail = (error) => {
    return{
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    };
};

export const purchaseBurgerStart = () => {
    return{
        type: actionTypes.PURCHASE_BURGER_START
    };
};

export const purchaseBurger = (orderData, token) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        // axios.post('/orders.json?auth=' + token,orderData)         //only for firebase.json it is added
        axios.post('http://127.0.0.1:5500/api/orders/addOrder', orderData, {
            headers:{Authorization: `JWT ${token}`}
        })
        .then(response=>{
            dispatch(purchaseBurgerSuccess(response.data.name, orderData));
        })
        .catch(error=>{
            dispatch(purchaseBurgerFail(error));
        });
    };
};

export const purchaseInit = () => {
    return{
        type: actionTypes.PURCHASE_INIT
    }
}

export const fetchOrdersSuccess = (orders) => {
    return{
        type: actionTypes.FETCH_ORDER_SUCCESS,
        orders: orders
    };
};

export const fetchOrdersFail = (error) => {
    return{
        type: actionTypes.FETCH_ORDER_FAIL,
        error: error
    };
};

export const fetchOrdersStart = () => {
    return{
        type: actionTypes.FETCH_ORDER_START
    };
};

export const fetchOrders = (token, userId) => {
    return dispatch => {
        dispatch(fetchOrdersStart());
        const jwtToken = localStorage.getItem("token");
        // const queryParams = '?auth='+token+ '&orderBy="userId"&equalTo="'+ userId + '"';   //specific for firebase
        // axios.get('/orders.json'+ queryParams)
        axios.get('http://127.0.0.1:5500/api/orders/getOrders',{
            headers:{Authorization: `JWT ${jwtToken}`}
        })
        .then(response => {
            const fetchedOrders=[];
            for(let key in response.data){
                fetchedOrders.push({
                    ...response.data[key],
                    id:key
                })
            }
            dispatch(fetchOrdersSuccess(fetchedOrders));
        })
        .catch(error=>{
            dispatch(fetchOrdersFail(error));
        });
    };
};

