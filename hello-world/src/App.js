import React from 'react';

/*
function doFilter(query) {
    return function (user) {
        return query === user.name;
    }
}

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            query: '',
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.setState({query: event.target.value});
    }

    render() {
        const users = [
            {name: 'Robin'},
            {name: 'Markus'},

        ];
        return (
            <div>
                <ul>
                    {users
                        .filter(doFilter(this.state.query))
                        .map(myuser => <li>{myuser.name}</li>)
                    }
                </ul>
                <input
                    type="text"
                    onChange={this.onChange}
                />
            </div>
        );
    }
}
*/
// Map, Reduce & Filter in React
/*export default class App extends React.Component {
    render() {
        var user = { name: 'Robin' };
        return (
            <div>
                <h1>{user.name}</h1>
            </div>
        );
    }
}*/
/*
export default class App extends React.Component {
    render() {
        var users = [
            {name: 'Robin'},
            {name: 'Markus'},
        ];

        return (
            <ul>
                {users.map(function (user) {
                    return <li>{user.name}</li>;
                })}
            </ul>
        );
    }
}
*/
/*
export default class App extends React.Component {
    render() {
        var users = [
            {name: 'Robin'},
            {name: 'Markus'},
        ];

        return (
            <ul>
                {users.map(user => <li>{user.name}</li>)}
            </ul>
        );
    }
}
*/
/*
Pretty soon, every React developer becomes used to the built-in JavaScript map() methods for arrays.
It just makes so much sense to map over an array and return the rendered output for each item.
The same can be applied for custom-tailored cases where filter() or reduce() make more sense rather than rendering an output for each mapped item.
* */
export default class App extends React.Component {
    render() {
        var users = [
            {name: 'Robin', isDeveloper: true},
            {name: 'Markus', isDeveloper: false},
            {name: 'John', isDeveloper: true},
        ];

        return (
            <ul>
                {users
                    .filter(user => user.isDeveloper)
                    .map(user => <li>{user.name}</li>)
                }
            </ul>
        );
    }
}

