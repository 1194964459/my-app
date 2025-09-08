import React, { useState, useMemo } from "react";
// 子组件：用 React.memo 包裹，期望“props 不变时不重渲染”

// 法1：提取为模块常量
// const style = { color: 'red' };

const Child = React.memo((props) => {
    console.log('Child 组件被渲染了', props);
    return <div>我是子组件</div>;
});

// 父组件
export default function Parent() {
    const [count, setCount] = useState(0);

    // 🔴 问题：每次 Parent 渲染，都会创建一个“新的 style 对象”
    const style = { color: 'red' };
    // 法2：使用useMemo、useCallback

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>点击（count: {count}）</button>
            {/* <Child aa={style} /> */}
            <Child {...style} />     {/*  */}
        </div>
    );
};