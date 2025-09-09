// src/components/CounterClass.jsx
import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../counterSlice';

class CounterClass extends React.Component {
    render() {
        const { count, increment, decrement } = this.props;
        return (
            <div>
                <h2>计数器: {count}</h2>
                <button onClick={() => decrement()}>-</button>
                <button onClick={() => increment()}>+</button>
            </div>
        );
    }
}

// 使用 connect 连接组件和 Redux
const mapStateToProps = (state) => ({
    count: state.counter.value,
});

const mapDispatchToProps = {
    increment,
    decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);