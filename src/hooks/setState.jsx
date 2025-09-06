import { useState } from 'react'

export default function Counter() {
    // 声明一个count状态，初始值为0
    const [count, setCount] = useState(0);
    function increment() {
        setCount(count + 1)
        setCount(count + 1)
        setCount(count + 1)
    }
    const [user, setUser] = useState({ name: "llal", age: 0 });

    // 错误：会覆盖原有属性
    // setUser({ age: 18 });
    return (
        <div>
            {/* <p>Count: {count}</p> */}
            {/* <button onClick={() => increment()}>加1</button> */}

            <p>user: {user.name}</p>
            <button onClick={() => setUser({ age: 18 })}>加1</button>
        </div>
    );
}



// setCount((pre) => pre + 1)
// setCount((pre) => pre + 1)
// setCount((pre) => pre + 1)