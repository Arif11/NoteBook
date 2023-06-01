import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import Todos from './Todos'
import  './home.css'
import Newtodo from './Newtodo'



const Home = () => {

    const [todos, setTodos] = useState([])

    const handleAddTodo = (newtodo) =>
    {
        setTodos((prevTodos) => {
            return [...prevTodos,{id: uuidv4(), newtodo}]
        });
        
    }

    const RemoveTodo = (id) =>
    {
      setTodos((prevTodos) => 
      {
        const filterTodos = prevTodos.filter((todo) => todo.id !== id);
        return filterTodos;
      });
    }

  return (
    <div className='container'>
        <h1 style={{color:"white"}}>Note Book</h1>
        <Newtodo onAddTodo ={handleAddTodo} />
        <Todos todos={todos} onTodoRemove={RemoveTodo}/>
    </div>
  )
}

export default Home