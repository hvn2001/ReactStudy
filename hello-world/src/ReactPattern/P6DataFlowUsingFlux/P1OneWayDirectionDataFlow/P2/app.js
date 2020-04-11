import React from 'react';

var Store = {
    _flag: false,
    set: function (value) {
        this._flag = value;
    },
    get: function () {
        return this._flag;
    }
};

class Switcher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {flag: false};
        this._onButtonClick = e => {
            this.setState({flag: !this.state.flag}, () => {
                this.props.onChange(this.state.flag);
            });
        }
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
        return <Switcher onChange={Store.set.bind(Store)}/>;
    }
}