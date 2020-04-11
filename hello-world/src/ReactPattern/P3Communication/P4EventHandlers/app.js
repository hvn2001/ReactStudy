import React from 'react';
import Form from './Form';
import Switcher from './Switcher';

export default class App extends React.Component {
    render() {
        return (
            <div><Switcher/><Form/></div>
        );
    }
}
