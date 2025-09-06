# Ref

CreateRef（类组件） 与 useRef（函数式组件）：两者都是用于**创建引用（ref）**来**访问 DOM 元素 或 存储组件中的可变值**

需注意：
* 函数组件无实例
* ref.current仅在组件挂载后才会指向 DOM/组件实例，挂载前为null，需避免在render或useEffect（无依赖）中直接访问。

### 一、持久化
**ref 的持久化**：
ref 对象**在组件的整个生命周期中保持不变，不会随着组件的重新渲染而被重新创建**。

为什么需要持久化？
* **稳定访问 DOM 或 组件**：如果 ref 对象*随渲染重新创建*，*可能导致在组件更新后丢失对 DOM 元素或组件实例的引用*。
* **存储跨渲染的数据**：如定时器 ID、第三方库实例等，这些数据需要在组件多次渲染之间保持一致。将其存储到 ref.current 属性上，useRef 或 createRef 的 current 属性改变时，都不会触发组件重新渲染。


### 二、useRef、createRef
* **函数组件中（useRef）**：
仅在首次渲染时创建对象，后续的每次重新渲染中**复用同一个对象**，不会创建新的 ref 实例。

* **类组件（createRef）**：
调用时就会创建新的 ref 对象！创建时机、次数完全由代码决定：
    * **只有在类组件的 constructor 中调用，并挂载到this上，才会实现持久化**，即：仅在首次渲染的时候创建。
        > 为什么要挂载到组件实例this上？ 只要组件实例存在，ref 对象就会一直存在（持久化），不会随render方法的调用而重新创建。
    * 其他情况，如 其他方法（如 render、事件处理函数）中挂载到this、用变量存储ref值 不挂载到this等等。都是方法执行一次创建一次。

两者的current属性都可存储任意变量的值（如定时器id），current 属性改变时，都不会触发组件重新渲染。


示例1：类组件中实现持久化，并且用 ref.current 存储数据
```js
class xx extends Component {
 constructor(props) {
    super(props);
    // 创建ref并挂载到实例属性上
    this.timerRef = createRef(null); 
 }
  componentDidMount() {
    // 将定时器ID存储到timerRef.current中，定时器ID改变  不会触发重新渲染
    this.timerRef.current = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // 组件卸载时，通过存储的定时器ID清除定时器
    clearInterval(this.timerRef.current); 
  }
  render() {
    return (<div>1111</div>)
  }
}
```

示例2：类组件中使用creareRef的各种方式，以及是否实现了持久化？
```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    // 组件初始化时创建（仅一次）
    this.ref1 = createRef(); 
  }

  handleClick = () => {
    // 点击时创建（每次点击生成新对象）
    const ref2 = createRef(); 
  };

  render() {
    // 每次渲染时创建（每次渲染生成新对象）
    const ref3 = createRef(); 

    // 在render中，即使挂载到this（每次渲染生成新对象）
    this.ref4 = createRef(); 

    return <div />;
  }
}
```

示例3：useRef 创建ref，并用其current属性存值
```js
import React, { useRef } from 'react';

function MyComponent() {
  const inputRef = useRef(null); // 创建 ref，初始值为 null
  const countRef = useRef(0); // 用 ref 存储可变值

  const focusInput = () => {
    inputRef.current.focus(); // 访问 DOM 元素
  };

  const increment = () => {
    countRef.current++; // 修改 ref 中的值，不会触发重渲染
    console.log('计数:', countRef.current);
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>聚焦输入框</button>
      <button onClick={increment}>增加计数</button>
    </div>
  );
}
```

