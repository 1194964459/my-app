import { useState, useEffect } from 'react';

export default function ScrollDemo() {
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        // 实时更新 scrollY 的值（此 effect 正常工作）
        const updateScrollY = () => {
            setScrollY(window.scrollY)
            console.log(`滚动距离：${scrollY}px`);
        };
        window.addEventListener('scroll', updateScrollY);
        return () => window.removeEventListener('scroll', updateScrollY);
    }, []);  //

    return <div style={{ height: '2000px' }}>滚动页面查看控制台</div>;
}