// no destructuring
const users = this.state.users;
const counter = this.state.counter;

// destructuring
const {users, counter} = this.state;



// no destructuring
function Greeting(props) {
    return <h1>{props.greeting}</h1>;
}

// destructuring
function Greeting({ greeting }) {
    return <h1>{greeting}</h1>;
}