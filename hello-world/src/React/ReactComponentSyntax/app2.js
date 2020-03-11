import React from 'react';

export default class Counter extends React.Component {
    state = {
        counter: 0,
    };

    // By using arrow functions, you can auto-bind class methods without having to bind them in the constructor
    onIncrement = () => {
        this.setState(state => ({counter: state.counter + 1}));
    }

    onDecrement = () => {
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

