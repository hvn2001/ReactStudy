import React from 'react';
import developer, {firstname, lastname} from './myfile2.js';

export default class App extends React.Component {
    render() {
        return (
            <p>Hello 2, {firstname} {developer.lastname}!</p>
        );
    }
}