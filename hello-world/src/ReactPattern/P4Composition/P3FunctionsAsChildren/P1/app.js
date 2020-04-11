import React, {Component} from 'react';


function UserName({children}) {
    return (
        <div>
            <b>{children.lastName}</b>,
            {children.firstName}
        </div>
    );
}


export default class App extends React.Component {
    render() {
        const user = {
            firstName: 'Krasimir',
            lastName: 'Tsonev'
        };
        return (
            <UserName>{user}</UserName>
        );
    }
}
