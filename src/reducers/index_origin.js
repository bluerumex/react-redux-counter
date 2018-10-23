import color from './color';
import number from './number';

import { combineReducers } from 'redux';

const reducers = combineReducers({
    numberData: number,
    colorData: color
});

/* 
import * as types from '../actions/ActionType';

const initialState = {
    color: 'black',
    number: 0
};

function counter(state=initialState, action) {
    switch (action.type) {
        case types.INCREMENT: 
            return {
                ...state,
                number: state.number + 1
            };
        case types.DECREMENT:
            return {
                ...state,
                number: state.number - 1
            };
        case types.SET_COLOR:
            console.log('set_color')
            return {
                ...state,
                color: action.color
            };
        default: 
            return state;
    }
}; 
*/

export default reducers;