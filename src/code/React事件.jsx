import { useEffect, useRef } from 'react';

export default function EventOrderDemo() {
    const parentRef = useRef(null);
    const childRef = useRef(null);

    // 原生事件（捕获阶段）
    useEffect(() => {
        const parentDom = parentRef.current;
        const childDom = childRef.current;

        // 父元素原生捕获事件
        parentDom.addEventListener('click', () => {
            console.log('原生: 父元素捕获阶段');
        }, true);

        // 子元素原生捕获事件
        childDom.addEventListener('click', () => {
            console.log('原生: 子元素捕获阶段');
        }, true);

        // 父元素原生冒泡事件（默认）
        parentDom.addEventListener('click', (e) => {
            // e.stopPropagation()
            console.log('原生: 父元素冒泡阶段');

        });

        // 子元素原生冒泡事件（默认）
        childDom.addEventListener('click', (e) => {
            // e.stopPropagation()
            console.log('原生: 子元素冒泡阶段');
        });
    }, []);

    // React 事件（默认冒泡阶段）
    const handleParentReactClick = () => {
        console.log('React: 父元素 onClick');
    };

    const handleChildReactClick = (e) => {
        e.stopPropagation() // 合成事件中取消冒泡，仅仅只影响他上层的合成事件

        console.log('React: 子元素 onClick');
    };

    return (
        <div ref={parentRef} onClick={handleParentReactClick}>
            父元素
            <div ref={childRef} onClick={handleChildReactClick}>
                子元素（点击我）
            </div>
        </div>
    );
}


/**  
 * 点击：父元素：
 * 
原生: 父元素捕获阶段
原生: 父元素冒泡阶段
React: 父元素 onClick
 */

/**
 * 点击：子元素：
 * 
原生: 父元素捕获阶段
原生: 子元素捕获阶段
原生: 子元素冒泡阶段
原生: 父元素冒泡阶段
React: 子元素 onClick
React: 父元素 onClick
 */


/**
 * 若父组件的原生事件，取消冒泡：
 * 
 * 合成事件不会触发了！
 */

/***
 * 若子组件的原生事件，取消冒泡：
 * 
 * 以下两项不触发了：
 *      父组件的原生冒泡
 *      两个合成事件 不会触发了！
 */

/**
 * 合成事件中取消冒泡：仅仅只影响DOM上层的合成事件
 * 
 * 子元素的合成事件取消冒泡：
 *      父元素的合成事件不触发了，但是不影响原生事件
 */