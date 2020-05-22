import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return{
        type:actionTypes.AUTH_START,
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return{
        type:actionTypes.AUTH_LOGOUT
    };
};



export const authSuccess = (token, userId) => {
    return{
        type:actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const authFail = (error) => {
    return{
        type:actionTypes.AUTH_FAIL,
        error: error
    };
};

export const auth = (email,password,isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }

        // let url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB9-WRhrIFJiJOk7_kPAv8DSIbQ4NwXhpA';
        let url = 'http://127.0.0.1:5500/api/auth/signup';
        
        if(!isSignup){
            // url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB9-WRhrIFJiJOk7_kPAv8DSIbQ4NwXhpA';
            url="http://127.0.0.1:5500/api/auth/login";
            axios.post(url, authData)
            .then((response) => {
                console.log(response.data);
                // const expirationDate = new Date(new Date().getTime() + response.data.user.expirationTime * 1000);
                localStorage.setItem('token', response.data.token);
                // localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', response.data.id);
                dispatch(authSuccess(response.data.token, response.data.user.userId));
                // console.log(new Date(expirationDate));
                // dispatch(checkAuthTimeout(expirationDate));
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err));
            });
        }else{
            axios.post(url, authData)
            .then((response) => {
                console.log(response.data);
                // const expirationDate = new Date(new Date().getTime() + response.data.user.expirationTime * 1000);
                localStorage.setItem('token', response.data.token);
                // localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', response.data.id);
                dispatch(authSuccess(response.data.token, response.data.userId));
                // console.log(new Date(expirationDate));
                // dispatch(checkAuthTimeout(expirationDate));
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err));
            });
        }
       
    };
};

export const setAuthRedirectedPath = (path) => {
    return{
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    }
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const authCheckStatus = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if(!token){
            dispatch(logout());
        }else{
            // const expirationDate = new Date(localStorage.getItem('expirationDate'));
            // if(expirationDate <= new Date()){
                // dispatch(logout());
            // }else{
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                // dispatch(checkAuthTimeout((expirationDate.getSeconds() - new Date().getSeconds()))/1000);

                // const expirationTime = (expirationDate.getSeconds() - new Date().getSeconds())/1000;

                // setTimeout(() => {
                //     dispatch(logout());
                // }, expirationTime * 5000);
            }
        }
    }
// }