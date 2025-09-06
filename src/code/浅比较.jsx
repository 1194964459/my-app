import React from "react";

export default class MyPureComponent extends React.PureComponent {
    state = { user: { name: "Alice" } };

    handleClick = () => {
        // 错误：直接修改原对象（引用地址没变）
        // this.state.user.name = "Bob";
        // this.setState({ user: this.state.user }); // 浅比较认为 state 没变化 → 不重渲染

        // 正确：
        this.setState({
            user: {
                ...this.state.user,
                name: 'Bob'
            }
        })
    };

    render() {
        console.log("组件渲染了"); // 点击按钮后不打印（state 引用未变）
        // return <p>Name: {this.state.user.name}</p>;
        return <button onClick={this.handleClick}>点击（不修改值）</button>
    }
}