import React from 'react';
import ClockContainer from './ClockContainer';

export default class App extends React.Component {
    render() {
        return (
            <ClockContainer time={new Date()}/>
        );
    }
}
