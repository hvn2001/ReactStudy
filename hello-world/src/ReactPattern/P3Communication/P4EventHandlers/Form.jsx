import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this._onNameChanged = this._onFieldChange.bind(this, 'name');
        this._onPasswordChanged = this._onFieldChange.bind(this, 'password');
    }

    render() {
        return (
            <form>
                <input onChange={this._onNameChanged}/>
                <input onChange={this._onPasswordChanged}/>
            </form>
        );
    }

    _onFieldChange(field, event) {
        console.log(`${field} changed to ${event.target.value}`);
    }
};

