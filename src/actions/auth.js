import axios from 'axios';
import { setAlert } from './alert';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR
} from './types';
import setAuthToken from '../utils/setAuthToken';

// Load User
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get('https://us-central1-dnd-shops.cloudfunctions.net/api/user');
        console.log(res.data);
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
    } catch (err) {
        const errors = err.response.data;
        console.log(errors);
        if (errors) {
            Object.keys(errors).forEach(error => dispatch(setAlert(errors[error], 'danger')));
        }
        
        dispatch({
            type: REGISTER_FAIL
        });
    }
}