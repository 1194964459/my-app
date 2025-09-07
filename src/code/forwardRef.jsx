import React, { forwardRef } from 'react';

// 1. 使用 forwardRef 创建可接收 ref 的子组件
const CustomInput = forwardRef((props, ref) => {
    // 3. 将父组件传递的 ref 绑定到内部 input 元素
    return <input {...props} ref={ref} />;
});

// 2. 父组件使用 CustomInput 并传递 ref
export default function ParentComponent() {
    // 创建一个 ref
    const inputRef = React.useRef(null);

    const focusInput = () => {
        // 4. 父组件通过 ref 直接访问子组件内部的 input 元素
        inputRef.current.focus();
        console.log('?', inputRef.current.value)
    };

    return (
        <div>
            <CustomInput ref={inputRef} placeholder="请输入内容" />
            <button onClick={focusInput}>聚焦输入框</button>
        </div>
    );
}