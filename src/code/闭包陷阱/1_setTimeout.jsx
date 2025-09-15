import { useState } from "react";

export default function TimerDemo() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        // 点击时，count 是当前值（比如 0）
        // setCount(count + 1); // 此时 count 变为 1  TODO:这里setCount的参数不管是个函数？还是个对象  都一样的效果
        setCount(count => count + 1)

        // 定时器回调捕获的是“点击瞬间的 count（0）”，而非 1
        setTimeout(() => {
            console.log(`count 的值是：${count}`)
        }, 200);
    };

    return (<>
        {count}
        <button onClick={handleClick}>点击计数</button>;
    </>)
}