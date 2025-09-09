import { useState } from 'react';

export default function ControlledInput() {
    // 用 state 管理输入值
    const [value, setValue] = useState('aa');

    // 处理输入变化，更新 state
    const handleChange = (e) => {
        // setValue(e.target.value);
    };

    return (
        <>
            受控组件：
            <input
                type="text"
                value={value}      // 绑定 state
                onChange={handleChange}  // 绑定更新函数
            />
        </>

    );
}