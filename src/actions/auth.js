import axios from 'axios';
import { setAlert } from './alert';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types';

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