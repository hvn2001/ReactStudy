import React from 'react';
import Header from './header.js';
import Navigation from './navigation.js';

export default class App extends React.Component {
    render() {
        return (
            <Header>
                <Navigation/>
            </Header>
        );
    }
}
