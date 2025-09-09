// src/store/slices/todosSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// 1. 创建异步action（返回Promise）
export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos', // action类型前缀
    async (_, { rejectWithValue }) => { // 第二个参数是thunkAPI，包含dispatch、getState等
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            return response.data; // 成功时，结果会作为action.payload
        } catch (error) {
            return rejectWithValue(error.message); // 失败时，传递错误信息
        }
    }
);

// 2. 定义切片
const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        list: [],
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null,
    },
    reducers: {
        // 同步action：添加待办
        addTodo: (state, action) => {
            state.list.push(action.payload);
        },
    },
    // 3. 处理异步action的三种状态
    extraReducers: (builder) => {
        builder
            // 加载中
            .addCase(fetchTodos.pending, (state) => {
                state.status = 'loading';
            })
            // 成功
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.list = action.payload; // 保存异步结果
            })
            // 失败
            .addCase(fetchTodos.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload; // 保存错误信息
            });
    },
});

// 导出同步action creator
export const { addTodo } = todosSlice.actions;

// 导出reducer
export default todosSlice.reducer;