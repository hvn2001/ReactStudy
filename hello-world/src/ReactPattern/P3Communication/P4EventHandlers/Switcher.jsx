import React from 'react';

export default class Switcher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: 'React in patterns'};
        this._buttonClick = this._handleButtonClick.bind(this);
    }

    render() {
        return (
            <button onClick={this._buttonClick}>
                click me
            </button>
        );
    }

    _handleButtonClick() {
        console.log(`Button is clicked inside ${this.state.name}`);
    }
};