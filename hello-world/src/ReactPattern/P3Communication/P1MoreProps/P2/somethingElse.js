import React from 'react';

export default class SomethingElse extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>The answer is {this.props.answer}</div>;
    }
}