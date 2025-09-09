// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'; // 后续创建的切片
import todosReducer from './todosSlice';

export const store = configureStore({
    reducer: {
        // 每个reducer对应状态树的一个分支
        counter: counterReducer,
        todos: todosReducer,
    },
});