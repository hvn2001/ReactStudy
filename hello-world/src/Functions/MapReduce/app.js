import React from 'react';
// Map, Reduce & Filter in React
/*
// ex2
export default class App extends React.Component {
    render() {
        var user = { name: 'Robin' };
        return (
            <div>
                <h1>{user.name}</h1>
            </div>
        );
    }
}
*/
/*
// ex3
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
// ex4
// used the JavaScript arrow function before, you can get rid of the function body and the return statement
// which leaves your rendered output way more concise.
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
// ex5
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