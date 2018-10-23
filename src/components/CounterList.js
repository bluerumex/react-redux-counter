import React from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';
import './CounterList.css';

const CounterList = ({counters, onIncrement, onDecremnt, onSetColor}) => {
    const counterList = counters.map(
        (counter, i) => (
            <Counter
                key={i}
                index={i}
                {...counter}
                onIncrement={onIncrement}
                onDecremnt={onDecremnt}
                onSetColor={onSetColor}
            />
        )
    )

    return (
        <div className='CounterList'>
            {counterList}
        </div>
    )
}

CounterList.prototype = {
    counters: PropTypes.arrayOf(
        PropTypes.shape({color: PropTypes.string, number: PropTypes.number})
    ),
    onIncrement: PropTypes.func,
    onDecremnt: PropTypes.func,
    onSetColor: PropTypes.func
}

CounterList.defaultProps = {
    counters: []
}

export default CounterList;


