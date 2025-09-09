import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 异步 Action（获取用户）
const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async (userId) => {
        const res = await fetch(`/api/users/${userId}`);
        return res.json();
    }
);

// 创建 Slice（包含 Reducer 和 Action）
const userSlice = createSlice({
    name: 'user', // 命名空间（自动作为 Action 类型前缀）
    initialState: { data: null, loading: false },
    reducers: {
        // 同步 Action 处理
        clearUser: (state) => {
            state.data = null; // RTK 内部使用 Immer 库，可“直接修改”状态（实际是生成新状态）
        }
    },
    // 处理异步 Action 的结果
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
            });
    }
});

// 导出 Action Creator
export const { clearUser } = userSlice.actions;

// 创建 Store
const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
});