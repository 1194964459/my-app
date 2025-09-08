import { useState } from "react";

export default function Foo() {
    const [count, setCount] = useState(0);

    function increment() {
        // console.log(count)
        const newCount = count < 3 ? count + 1 : count;
        console.log(newCount) // 如果之前的逻辑已经走过的话，就不会继续走了；但是类组件还是会继续触发渲染的！！ TODO:

        setCount(newCount);
    }

    console.log("Foo render");

    return (
        <div>
            <h1> {count} </h1>
            <button onClick={increment}>Increment</button>
        </div>
    );
} 