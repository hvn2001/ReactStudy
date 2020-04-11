import React from 'react';

export default class Dataprovider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: null};
        setTimeout(() => this.setState({data: 'Hey there!'}), 5000);
    }

    render() {
        if (this.state.data === null) return null;
        return (
            <section> {this.props.render(this.state.data)} </section>
        );
    }
}