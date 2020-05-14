import { NEWITEM_SUCCESS, DELETEITEM_SUCCESS } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case NEWITEM_SUCCESS:
            return [...state, payload];
        case DELETEITEM_SUCCESS:
            return [...state, payload];
        default:
            return state;
    }
}