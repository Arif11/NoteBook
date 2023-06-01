import React from 'react'
import './todo.css'
import { FaTrash } from "react-icons/fa";

const Todo = (props) => {
    const {title,desc}=props.todo;
    const {id}=props;

    const handleclick = (id) =>
    {
      props.onTodoRemove(id);
    }
  return (
    <article className='todo'>
        <div>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
        <div>
            <button className='btn' onClick={()=>{handleclick(id)}}>
            <FaTrash className='icon' />
            </button>
        </div>
    </article>
  )
}

export default Todo