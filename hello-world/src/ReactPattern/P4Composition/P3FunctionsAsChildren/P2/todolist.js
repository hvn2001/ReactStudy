import React from 'react';

function Todolist({todos, children}) {
    return (
        <section className='main-section'>
            <ul className='todo-list'>{
                todos.map((todo, i) => (
                    <li key={i}>{children(todo)}</li>
                ))
            }</ul>
        </section>
    );
}

export default Todolist;