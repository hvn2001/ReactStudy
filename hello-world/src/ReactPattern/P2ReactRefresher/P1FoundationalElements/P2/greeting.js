import React from 'react';

export default class Greeting extends React.Component {
    render() {
        return <span>Hello {this.props.name}!</span>;
    }
}