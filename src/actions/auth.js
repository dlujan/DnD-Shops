import axios from 'axios';
import { setAlert } from './alert';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from './types';
import setAuthToken from '../utils/setAuthToken';

// Load User
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get('https://us-central1-dnd-shops.cloudfunctions.net/api/user');
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}

// Register User
export const register = ({ email, password, confirmPassword, username }) => async dispatch => {
    const newUser = {
        email,
        password,
        confirmPassword,
        username
    }

    try {
        const res = await axios.post('https://us-central1-dnd-shops.cloudfunctions.net/api/signup', newUser);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });

        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data;
        if (errors) {
            Object.keys(errors).forEach(error => dispatch(setAlert(errors[error], 'danger')));
        }
        
        dispatch({
            type: REGISTER_FAIL
        });
    }
}

// Login User
export const login = (email, password) => async dispatch => {
    const userCredents = {
        email,
        password
    }

    try {
        const res = await axios.post('https://us-central1-dnd-shops.cloudfunctions.net/api/login', userCredents);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data;
        if (err) {
            Object.keys(errors).forEach(error => dispatch(setAlert(errors[error], 'danger')));
        } else {
            console.error('Something went wrong.')
        }
        
        dispatch({
            type: LOGIN_FAIL
        });
    }
}

// LOGOUT / Clear Profile
export const logout = () => dispatch => {
    dispatch({ type: LOGOUT })
}