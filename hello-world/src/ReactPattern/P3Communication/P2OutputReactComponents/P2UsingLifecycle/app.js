import React from 'react';
import Results from './results';

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';
export default class App extends React.Component {
    constructor() {
        super();
        this.getresults = this.getresults.bind(this);
        this.state = {
            hits: [],
        }
    }

    getresults() {
        fetch('https://hn.algolia.com/api/v1/search?query=redux')
            .then(response => response.json())
            .then((json) => {
                this.setState({hits: json.hits});
            });
    };

    render() {
        return <Results hits={this.state.hits} getResults={this.getresults}/>
    }
}
 