/**
 * 类组件中的state怎么定义？
 */
import React from "react";

export default class AA extends React.Component {
    // 法1：state位于 constructor 内
    constructor(props) {
        super(props)
        this.state = {
            count: 0, // 数字类型
            user: { name: 'Alice', age: 20 }, // 对象类型
            list: [1, 2, 3] // 数组类型
        }
    }
    // 法2：
    // state = { count: 0 };

    handleClick = () => {
        this.setState({ count: this.state.count + 1 }); // 类组件专用
    };
    render() {
        console.log('重新渲染')
        return (
            <>
                <button onClick={this.handleClick}>按钮</button>
                <div>{this.state.user.name}</div>
                <div>{this.state.user.list}</div>
                {
                    this.state.list.map(ele => <div>{ele}</div>)
                }
            </>
        )
    }
}