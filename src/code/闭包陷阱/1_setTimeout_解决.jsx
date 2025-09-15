import { useState, useEffect } from "react";

/**
 * 仅执行单次： setCount(count + 1) 与 setCount(count => count + 1) 一样的效果
 * 若多次连着执行，setCount(count + 1)只更新了一次； setCount(count => count + 1) 是执行了几次就更新了几次...
 */
export default function TimerDemo() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count => count + 1)
        setCount(count => count + 1)
        setCount(count => count + 1)

        // setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 1)
    };

    useEffect(() => {
        setTimeout(() => {
            console.log(`count 的值是：${count}`)
        }, 200);
    }, [count])

    return (<>
        {count}
        <button onClick={handleClick}>点击计数</button>;
    </>)
}