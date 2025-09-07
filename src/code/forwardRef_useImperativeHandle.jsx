import React, { forwardRef, useRef, useImperativeHandle } from 'react';

const CustomInput = forwardRef((props, ref) => {
    // 子组件内部的真实 DOM ref
    const internalRef = useRef(null);

    // 自定义暴露给父组件的方法（覆盖默认的 ref 行为）
    useImperativeHandle(ref, () => ({
        // 只暴露 focus 方法，不暴露完整 DOM 元素
        focus: () => {
            internalRef.current.focus();
        },
        // 额外暴露一个自定义方法
        clear: () => {
            internalRef.current.value = '';
        },

        value: () => {
            return internalRef.current.value
        }
    }));

    return <input ref={internalRef} {...props} />;
});

// 父组件只能访问到自定义暴露的方法
export default function Parent() {
    const inputRef = useRef(null);

    const handleClick = () => {
        // inputRef.current.focus(); // 调用自定义的 focus 方法
        // inputRef.current.clear(); // 调用自定义的 clear 方法
        // inputRef.current.value = 'xxx'; // 错误！无法访问 DOM 原生属性
        console.log(inputRef.current.value)   // 直接获取是 undefined；需子组件用内部方法暴漏出来

        // let cur = inputRef.current.value()
        // console.log(cur)
    };

    return (
        <div>
            <CustomInput placeholder="测试" ref={inputRef} />
            <button onClick={handleClick}>操作输入框</button>
        </div>
    );
}