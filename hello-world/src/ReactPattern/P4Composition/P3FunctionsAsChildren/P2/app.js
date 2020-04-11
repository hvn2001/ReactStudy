import React from 'react';
import Todolist from './todolist.js';

export default class App extends React.Component {
    render() {
        const todos = [
            {label: 'Write tests', status: 'done'},
            {label: 'Sent report', status: 'progress'},
            {label: 'Answer emails', status: 'done'}
        ];

        const isCompleted = todo => todo.status === 'done';
        return (
            <Todolist todos={todos}>
                {
                    todo => isCompleted(todo) ?
                        <b>{todo.label}</b> :
                        todo.label
                }
            </Todolist>
        );
    }
}