import React from 'react';

export default class App extends React.Component {
    getGreeting() {
        return 'Welcome to React';
    }

    render() {
        return (
            <div>
                <h1>{this.getGreeting()}</h1>
            </div>
        );
    }
}