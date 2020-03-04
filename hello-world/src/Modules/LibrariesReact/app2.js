import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }

    componentDidMount() {
        axios.get('https://api.mydomain.com')
            .then(data => this.setState({data}));
    }

    render() {
        // JSX
    }
}

export default App;