import { ITEM_CREATED, ITEM_DELETED } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case ITEM_CREATED:
        case ITEM_DELETED:
            return [...state, payload];
        default:
            return state;
    }
}