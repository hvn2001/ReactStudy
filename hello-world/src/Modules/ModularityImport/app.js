import React from 'react';
// import {firstname, lastname} from './myfile.js';
import * as person from './myfile.js';
// import {firstname as username} from './myfile.js';

export default class App extends React.Component {
    render() {
        return (
            <p>Hello, {person.firstname} {person.lastname}!</p>
        );
    }
}