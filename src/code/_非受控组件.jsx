import { useRef } from 'react';

export default function UncontrolledInput() {
    // 创建 ref 关联到 input 元素
    const inputRef = useRef(null);

    // 获取输入值（通常在提交时）
    const handleSubmit = () => {
        const value = inputRef.current.value;
        console.log('输入值：', value);
    };

    return (
        <div>
            非受控组件：
            <input
                type="text"
                ref={inputRef}       // 关联 ref
                defaultValue="初始值"  // 初始值（可选）
            />
            <button onClick={handleSubmit}>提交</button>
        </div>
    );
}