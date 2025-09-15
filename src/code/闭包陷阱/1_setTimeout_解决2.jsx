import { useState, useEffect, useRef } from "react";


export default function TimerDemo() {
    const [count, setCount] = useState(0);
    const countRef = useRef()

    const handleClick = () => {
        let newVal = count + 1
        setCount(newVal)
        countRef.current = newVal

        setTimeout(() => {
            console.log(`count 的值是：${countRef.current}`)
        }, 200);
    };

    return (<>
        {count}
        <button onClick={handleClick}>点击计数</button>;
    </>)
}