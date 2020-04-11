import React from 'react';
import Header from './header.js';
import Navigation from './navigation.js';

const Title = function () {
    return <h1>Hello there!</h1>;
}

export default class App extends React.Component {
    render() {
        return (
            <Header title={<Title/>}>
                <Navigation/>
            </Header>
        );
    }
}
