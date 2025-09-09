// src/components/TodoList.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, addTodo } from '../todosSlice';

const TodoList = () => {
    const { list, status, error } = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    // 组件挂载时触发异步请求
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchTodos());
        }
    }, [status, dispatch]);

    const handleAddTodo = () => {
        dispatch(addTodo({ id: Date.now(), title: '新任务', completed: false }));
    };

    if (status === 'loading') return <div>加载中...</div>;
    if (status === 'failed') return <div>错误: {error}</div>;

    return (
        <div>
            <h2>待办列表（{list.length}项）</h2>
            <button onClick={handleAddTodo}>添加任务</button>
            <ul>
                {list.slice(0, 5).map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;