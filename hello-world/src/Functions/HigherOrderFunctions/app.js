import React from 'react';

/*
Ex1
Higher-order functions are a great programming concept,
especially when moving towards functional programming.
*/
export class App1 extends React.Component {
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
                        .filter(user => this.state.query === user.name)
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


/*
Ex2
doesn’t work because the doFilter() function needs to know about the query property from the state
*/
/*
function doFilter(user) {
    return query === user.name;
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
                        .filter(doFilter)
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

/*
Ex3
The previous implementation doesn’t work because the doFilter() function needs to know about
the query property from the state. So you can pass it to the function by wrapping it with
another function which leads to a higher-order function.
*/
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


/*
Ex4
using JavaScript ES6 arrow functions, you can make a higher-order function more concise.
Furthermore, this shorthand version makes it more attractive composing functions into functions.
*/
const doFilter = query => user =>
    query === user.name;

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