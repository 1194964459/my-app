import React from "react";
export default class ExampleComponent extends React.Component {
    // TODO:为什么会被执行2次啊？
    /**
     * React 的严格模式（通过 <React.StrictMode> 包裹组件）会为了帮助开发者发现潜在问题，
     * 在开发环境下对于类组件，getDerivedStateFromProps、shouldComponentUpdate 等方法可能会被调用两次，以此来检测副作用等可能存在的问题。
     */
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps called');
        return null;
    }

    state = {
        value: 0
    };

    increment = () => {
        this.setState({ value: this.state.value + 1 });
    };

    render() {
        return (
            <div>
                <button onClick={this.increment}>Increment</button>
                <p>{this.state.value}</p>
            </div>
        );
    }
}