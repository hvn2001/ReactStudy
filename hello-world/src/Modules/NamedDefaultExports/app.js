import React from 'react';
import developer from './myfile.js';

export default class App extends React.Component {
    render() {
        return (
            <p>Hello, {developer.firstname}!</p>
        );
    }
}
