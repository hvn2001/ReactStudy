import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        // creating state
        this.state = {
            firstname: 'Robin',
            lastname: 'Wieruch',
        }
    }

    getName() {
        // using state to get information
        return (`${this.state.firstname} ${this.state.lastname}`)
    }

    render() {
        var changeName = setTimeout(function () {
            this.setState({lastname: 'Hood'}); // setting state after delay of 5 seconds
        }.bind(this), 5000);
        return (
            <h1>{this.getName()}</h1>
        );
    }
}