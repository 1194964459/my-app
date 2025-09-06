import { useState } from 'react'

export default function Counter() {
    // 声明一个count状态，初始值为0
    // const [count, setCount] = useState(getInitialValue());
    const [count, setCount] = useState(() => getInitialValue());


    function getInitialValue() {
        console.log('获取初始化参数！')
        return 1
    }

    function increment() {
        setCount(count + 1)
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => increment()}>加1</button>
        </div>
    );
}

