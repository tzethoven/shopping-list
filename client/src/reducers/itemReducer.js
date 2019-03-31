import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initialstate = {
    items: [
        { id: uuid(), name: 'Brocoli' },
        { id: uuid(), name: 'Eggplant' },
        { id: uuid(), name: 'Courgette' },
        { id: uuid(), name: 'Leek' }
    ]
};

export default function(state=initialstate, action) {
    switch (action) {
        case GET_ITEMS:
            return {
                ...state
            };
        case DELETE_ITEM:
            console.log('test1');
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)    
            };
        default:
            return state;
    }
};