import React from 'react'

export default class Foo extends React.Component {
    state = { count: 0 };

    increment = () => {
        const { count } = this.state;

        const newCount = count < 3 ? count + 1 : count;

        this.setState({ count: newCount });  // count超过3之后，就没变了；但是还一直触发render
    };

    render() {
        const { count } = this.state;
        console.log("Foo render");

        return (
            <div>
                <h1> {count} </h1>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}