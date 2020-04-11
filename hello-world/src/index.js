import React from 'react';
import './index.css';

import ReactDOM from 'react-dom';
// import App from './App';

// --------- Variables, Operators & Expressions - Ternary Operator in React ---------
import App from './VariablesExpressions/TernaryOperator/app3';

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);


// --------- Functions - Map, Reduce & Filter in React ---------
/*
import App from './Functions/MapReduce/app';
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
 */


// --------- Functions - Higher-Order Functions in React ---------
/*
import App from './Functions/HigherOrderFunctions/app';

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
*/
/*
import Counter from './Functions/HigherOrderFunctions/Counter';

ReactDOM.render(
    <Counter/>,
    document.getElementById('root')
);
 */

// --------- Modules ---------
// import App from './Modules/NamedDefaultExports/app2';
// import App from './Modules/LibrariesReact/app';


// --------- React - React Class Components ---------
/*
import App from './React/ReactClassComponents/app';

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
*/

// --------- React - React Props ---------
/*
import App from './React/ReactProps/app';

ReactDOM.render(
    <App greeting="greeting #1" anotherGreeting="greeting #2"/>,
    document.getElementById('root')
);
 */

// --------- React - State in React ---------
/*
import App from './React/StateReact/app2';

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
*/

// --------- React - React Component Syntax --------------
/*
import Counter from './React/ReactComponentSyntax/app2';
ReactDOM.render(
    <Counter/>,
    document.getElementById('root')
);
*/


// --------- React - Functions as Components in React --------------
/*
import {App} from './React/FunctionsAsComponents/app';

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
*/

/*import {Greeting} from './React/FunctionsAsComponents/app2';

ReactDOM.render(
    <Greeting greeting="hello from a functional stateless component that takes props!"/>,
    document.getElementById('root')
);*/
/*
import {Greeting} from './React/FunctionsAsComponents/arrow1';
ReactDOM.render(
    <Greeting greeting="hello from a JS ES6 arrow function component"/>,
    document.getElementById('root')
);*/

/*
import {Greeting} from './React/FunctionsAsComponents/arrow2';

ReactDOM.render(
    <Greeting greeting="hello from a JavaScript ES6 arrow function without body and implicit return"/>,

    document.getElementById('root')
);
*/


/*
// --------- init React ---------
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/

/*
import React from 'react';
import './index.css';

import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
*/


// ---------- React in Patterns ------------------
// 2. React Refresher
//1_FoundationalElements

/* P1
import App from './ReactPattern/P2ReactRefresher/P1FoundationalElements/P1/app';

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
 */

/* P2
import Greeting from "./ReactPattern/P2ReactRefresher/P1FoundationalElements/P2/greeting";

ReactDOM.render(
    <Greeting name="Alice"/>,
    document.getElementById('root')
);
 */


//2_State in React
/*
import Message from "./ReactPattern/P2ReactRefresher/P2StateReact/message";

ReactDOM.render(
    <Message/>,
    document.getElementById('root')
);
 */

/*
// 3_The Component Lifecycle
import App from "./ReactPattern/P2ReactRefresher/P3TheComponentLifecycle/P1LifecycleMethods/app";

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
 */

// 3. Communication
// 1More on Props
/* P1
import App from "./ReactPattern/P3Communication/P1MoreProps/P1/app";

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
 */

/* P2
import SomethingElse from "./ReactPattern/P3Communication/P1MoreProps/P2/somethingElse";
import Answer from "./ReactPattern/P3Communication/P1MoreProps/P2/answer";

ReactDOM.render(
    <SomethingElse answer={<Answer/>}/>,
    document.getElementById('root')
);
 */

/* P3
import App from "./ReactPattern/P3Communication/P1MoreProps/P3/app";

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
 */


// 2Output from React Components
/* P1
import App from "./ReactPattern/P3Communication/P2OutputReactComponents/P1Output/app";

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
*/

/* P2
import App from "./ReactPattern/P3Communication/P2OutputReactComponents/P2UsingLifecycle/app";

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
 */


// 3Test Your Skills So Far!

// P1FinalThought
/*
import App from "./ReactPattern/P3Communication/P3TestSkill/P1FinalThought/app";

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
 */
/* P2
import App from "./ReactPattern/P3Communication/P3TestSkill/P2CodingChall/app";
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
*/

// 4Event Handlers
/*
import App from "./ReactPattern/P3Communication/P4EventHandlers/app";

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
 */


// 4 Composition

// P1 Composition
/* P1
import App from "./ReactPattern/P4Composition/P1Composition/P1/app";

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
 */

/* P2
import App from "./ReactPattern/P4Composition/P1Composition/P2/app";

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
*/

// 2. Higher Order Component
/*
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
*/


// 3 Functions as Children and the Render Prop Patterns
// P1
/*
import App from "./ReactPattern/P4Composition/P3FunctionsAsChildren/P1/app";
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
 */

// P2
/*
import App from "./ReactPattern/P4Composition/P3FunctionsAsChildren/P2/app";

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
*/

// P3
/*
import App from "./ReactPattern/P4Composition/P3FunctionsAsChildren/P3/app";

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
 */

// 5. More on Inputs and Components

// 1Controlled and Uncontrolled Inputs
/*
import App from "./ReactPattern/P5MoreInputsComponents/P1ControlledUncontrolled/P1/app";

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
 */

// 2 Presentational and Container Components
/*
import App from "./ReactPattern/P5MoreInputsComponents/P2Presentational/P1/app";

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
 */

// 6. Data Flow using Flux
// 1 One-Way Direction Data Flow
// P1
/*
import App from "./ReactPattern/P6DataFlowUsingFlux/P1OneWayDirectionDataFlow/P1/app";

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
 */

// P2
/*
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
 */


// P3
/*import App from "./ReactPattern/P6DataFlowUsingFlux/P1OneWayDirectionDataFlow/P3/app";
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);*/


// 7. Data Flow using Redux
// 6 Final Thoughts and Code for Counter App
/*
import {Provider, connect} from 'react-redux';
import {createStore, combineReducers} from 'redux';

// Action creators

const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';
const CHANGE_VISIBILITY = 'CHANGE_VISIBILITY';

const add = () => ({type: ADD});
const subtract = () => ({type: SUBTRACT});
const changeVisibility = visible => ({type: CHANGE_VISIBILITY, visible});

// Reducers

const initialState = {
    counter: {
        value: 0
    },
    visible: true
};
const counterReducer = function (state, action) {
    console.log(state, action);
    if (action.type === ADD) {
        return {value: state.value + 1};
    } else if (action.type === SUBTRACT) {
        return {value: state.value - 1};
    }
    return state || {value: 0};
};
const visibilityReducer = function (state, action) {
    if (action.type === CHANGE_VISIBILITY) {
        return action.visible;
    }
    return true;
};
const rootReducer = combineReducers({
    counter: counterReducer,
    visible: visibilityReducer
});

// Selectors

const getCounterValue = state => state.counter.value;
const getVisibility = state => state.visible;

// Store creation

const store = createStore(rootReducer, initialState);

// React components

function Counter({value, add, subtract}) {
    return (
        <div>
            <p>Value: {value}</p>
            <button onClick={add}>Add</button>
            <button onClick={subtract}>Subtract</button>
        </div>
    );
}

const CounterConnected = connect(
    state => ({
        value: getCounterValue(state)
    }),
    dispatch => ({
        add: () => dispatch(add()),
        subtract: () => dispatch(subtract())
    })
)(Counter);

function Visibility({changeVisibility}) {
    return (
        <div>
            <button onClick={() => changeVisibility(true)}>Visible</button>
            <button onClick={() => changeVisibility(false)}>Hidden</button>
        </div>
    );
}

const VisibilityConnected = connect(
    null,
    dispatch => ({
        changeVisibility: value => dispatch(changeVisibility(value))
    })
)(Visibility);


function App({visible}) {
    return (
        <div>
            <VisibilityConnected/>
            {visible && <CounterConnected/>}
        </div>
    );
}

const AppConnected = connect(
    state => ({
        visible: getVisibility(state)
    })
)(App);

ReactDOM.render(<Provider store={store}><AppConnected/></Provider>, document.getElementById('root'));
 */

// 8. Dependency Injection in React
// 1 Dependency Injection - Using React's context (prior v.16.3)
/*
import App from "./ReactPattern/P8DependencyInjectionReact/P1UsingReactPrior16.3/app";

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
*/


// 2Dependency Injection - Using React's context (v. 16.3and above)
/*
import App from "./ReactPattern/P8DependencyInjectionReact/P2UsingReactAbove16.3/app";

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
 */