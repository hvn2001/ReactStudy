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
        setTimeout(function () {
            this.setState({lastname: 'Hood'}); // setting state after delay of 5 seconds
            // TODO HVN: 'this'
            // this.setState(state =>({lastname: 'Hood'}));
        }.bind(this), 2000);
        return (
            <h1>{this.getName()}</h1>
        );
    }
}