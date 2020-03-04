import React from 'react';

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Hello!',
        };
    }

    componentDidMount() {
        fetch(API + DEFAULT_QUERY)
            .then(response => response.json())
            .then(data => this.setState({title: data.hits[0].title}));
    }

    render() {
        return (
            <h1> {this.state.title} </h1>
        );
    }
}