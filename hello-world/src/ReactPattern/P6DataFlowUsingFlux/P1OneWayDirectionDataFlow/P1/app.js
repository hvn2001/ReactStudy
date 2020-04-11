import React from 'react';

class Switcher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {flag: false};
        this._onButtonClick = e => this.setState({
            flag: !this.state.flag
        });
    }

    render() {
        return (
            <button onClick={this._onButtonClick}>
                {this.state.flag ? 'lights on' : 'lights off'}
            </button>
        );
    }
};

export default class App extends React.Component {
    render() {
        return <Switcher/>;
    }
}