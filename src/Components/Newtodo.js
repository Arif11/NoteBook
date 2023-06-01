import React,{useState} from 'react'
import './newtodo.css'

const Newtodo = (props) => {
    const [todo, setTodo] = useState({title : "", desc : ""});
    const {title,desc} = todo;
    const handlechange = (event) =>
    {
        const name = event.target.name;
        setTodo((oldTodo) =>{
            return{
                ...oldTodo, [name]: event.target.value
            }
        })
    }
    const handlesubmit = (event) =>
    {
        event.preventDefault();
        props.onAddTodo(todo);
        setTodo({title:"",desc:""})
    }
  return (
    <form className='form' onSubmit={handlesubmit}>
        <div className='form-field'>
        <label>Title : </label>
        <input type='text' id='title' name='title' onChange={handlechange} value={title}/>
        </div>

        <div className='form-field'>
        <label>Description : </label>
        <textarea type='text' id='desc' name='desc' onChange={handlechange} value={desc} />
        </div>

        <button type='submit'>Add Note</button>

    </form>
  )
}

export default Newtodo