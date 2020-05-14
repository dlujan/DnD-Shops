import axios from 'axios';
import { setAlert } from './alert';
import { loadUser } from './auth';
import {
    NEWITEM_SUCCESS,
    DELETEITEM_SUCCESS
} from './types';

// Create custom item
export const createItem = ({name, cost, desc, category, weight, DMnotes}) => async dispatch => {
    const newItem = {
        name,
        cost,
        desc,
        category,
        weight,
        DMnotes
    }

    try {
        const res = await axios.post('https://us-central1-dnd-shops.cloudfunctions.net/api/newItem', newItem);
        
        dispatch({
            type: NEWITEM_SUCCESS,
            payload: res.data
        });
        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data;
        if (errors) {
            Object.keys(errors).forEach(error => dispatch(setAlert(errors[error], 'danger')));
        }
    }
}

// Delete custom item
export const deleteItem = (itemId) => async dispatch => {

    try {
        // const res = await axios.post(`https://us-central1-dnd-shops.cloudfunctions.net/api/item/${itemId}`);
        
        // dispatch({
        //     type: DELETEITEM_SUCCESS,
        //     payload: res.data
        // });
        console.log(`deleted item with ID of ${itemId}`);
        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data;
        if (errors) {
            Object.keys(errors).forEach(error => dispatch(setAlert(errors[error], 'danger')));
        }
    }
}