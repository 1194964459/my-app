import React from "react";


export default class Counter extends React.Component {
    // state = { count: 0 };
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        // this.increment = this.increment.bind(this)
    }

    // 定义方法
    // increment() {
    //     // 此处的 this 默认是 undefined，需绑定后才指向组件实例
    //     this.setState({ count: this.state.count + 1 });
    // }

    // 箭头函数自动绑定 this，箭头函数的 this 继承自父作用域
    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }


    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                {/* 调用方法时需确保 this 正确指向组件实例 */}
                {/* <button onClick={this.increment.bind(this)}>+1</button> */}

                {/* 直接访问：Cannot read properties of undefined (reading 'setState') */}
                {/* 若在constructor中绑定也可以，注意此处没有()，不然没有点击也触发了 */}
                <button onClick={this.increment}>+1</button>



            </div>
        );
    }
}