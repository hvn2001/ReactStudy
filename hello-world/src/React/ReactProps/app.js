import React from 'react';

export default class App extends React.Component {
    getGreeting() {
        return this.props.greeting;
    }

    getOtherGreeting() {
        return this.props.anotherGreeting;
    }

    render() {
        return (
            <div>
                <h1> {this.getGreeting()} </h1>
                <h2> {this.getOtherGreeting()} </h2>
            </div>
        );
    }
}
