import axios from 'axios';
import { setAlert } from './alert';
import { loadUser } from './auth';
import {
    ITEM_CREATED,
    ITEM_DELETED
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
            type: ITEM_CREATED,
            payload: res.data
        });
        dispatch(setAlert('Item Created', 'success'));
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
        const res = await axios.delete(`https://us-central1-dnd-shops.cloudfunctions.net/api/item/${itemId}`);
        
        dispatch({type: ITEM_DELETED, payload: res.data});
        dispatch(setAlert('Item Deleted', 'success'));
        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data;
        if (errors) {
            Object.keys(errors).forEach(error => dispatch(setAlert(errors[error], 'danger')));
        }
    }
}