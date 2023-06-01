import React from 'react'

import './todos.css'
import Todo from './Todo';

const Todos = (props) => {
  return (
    <section className='todos'>
        {
            props.todos.map((todo) => 
            <Todo todo={todo.newtodo} key={todo.id} id={todo.id} onTodoRemove={props.onTodoRemove} />)
        }
    </section>
  )
}

export default Todos