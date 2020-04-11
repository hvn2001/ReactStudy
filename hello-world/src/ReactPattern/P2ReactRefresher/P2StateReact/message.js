import React from 'react';

export default class Message extends React.Component {
    constructor() {
        super();
        this.state = {
            showMessage: true,
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(state => ({
            showMessage: !state.showMessage,
        }));
    }

    render() {
        return (
            <div>
                {this.state.showMessage && "Message is visible"}
                <button onClick={this.toggle}>Click me!</button>
            </div>
        );
    }
}