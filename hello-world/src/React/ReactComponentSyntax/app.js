import React from 'react';

export default class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        };

        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
    }

    onIncrement() {
        this.setState(state => ({counter: state.counter + 1}));
        // this.setState({counter: this.state.counter + 1});
    }

    onDecrement() {
        this.setState(state => ({counter: state.counter - 1}));
    }

    render() {
        return (
            <div>
                <p>{this.state.counter}</p>
                <button onClick={this.onIncrement} type="button">Increment</button>
                <button onClick={this.onDecrement} type="button">Decrement</button>
            </div>

        );
    }
}
