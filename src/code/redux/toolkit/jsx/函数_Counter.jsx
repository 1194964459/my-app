// src/components/Counter.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../counterSlice';

const Counter = () => {
    // 1. 获取状态（从store的counter分支）
    const count = useSelector((state) => state.counter.value);
    // 2. 获取dispatch函数
    const dispatch = useDispatch();

    return (
        <div>
            <h2>计数器: {count}</h2>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
        </div>
    );
};

export default Counter;