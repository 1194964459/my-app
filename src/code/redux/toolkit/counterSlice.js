// src/store/slices/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

// 定义切片
const counterSlice = createSlice({
    name: 'counter', // 切片名称（作为action类型的前缀）
    initialState: { value: 0 }, // 初始状态
    reducers: {
        // 同步reducer：直接“修改”state（Immer处理不可变性）
        increment: (state) => {
            state.value += 1; // 等价于 return { ...state, value: state.value + 1 }
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload; // 接收参数
        },
    },
});

// 自动生成action creator（与reducers函数同名）
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// 导出reducer（用于配置到store）
export default counterSlice.reducer;