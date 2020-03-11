import React from 'react';

export default class App extends React.Component {
    getGreeting1() {
        return this.props.greeting;
    }

    getOtherGreeting() {
        return this.props.anotherGreeting;
    }

    render() {
        return (
            <div>
                <h1> {this.props.greeting} </h1>
                <h1> {this.getGreeting1()} </h1>
                <h2> {this.getOtherGreeting()} </h2>
            </div>
        );
    }
}
