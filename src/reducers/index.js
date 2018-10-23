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

export default counter;