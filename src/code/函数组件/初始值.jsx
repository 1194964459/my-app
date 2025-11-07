import { useState } from "react";
// 普通函数：每次调用都会打印日志（证明“计算过程执行了”）
function getDefaultCount() {
    console.log("👉 执行了 getDefaultCount（计算过程）");
    return 0; // 计算结果
}

export default function App() {
    // 这里的 getDefaultCount() 就是“xxx”，包含“计算过程”和“计算结果”
    // const [count, setCount] = useState(getDefaultCount());
    const [count, setCount] = useState(() => getDefaultCount());



    return (
        <div>
            <p>count: {count}</p>
            <button onClick={() => setCount(prev => prev + 1)}>加 1</button>
        </div>
    );
}