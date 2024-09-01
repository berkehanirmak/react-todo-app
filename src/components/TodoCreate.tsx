import React, { useState } from 'react'
import { createTodo } from '../redux/todoSlice'
import { useDispatch } from 'react-redux'
import { TodoType } from '../types/Types'


const TodoCreate = () => {
  const dispatch = useDispatch()

  const [newTodo, setNewTodo] = useState<string>('')

  const handleCreateTodo = () => {
    if(newTodo.trim().length == 0) {
     alert("Please Enter Todo")
     return
    }
    const payload: TodoType = {
      id:Math.floor(Math.random() * 999999999),
      content: newTodo,
      completed: false, 

    }
    dispatch(createTodo(payload)) 
    setNewTodo('')

  }
  
    return (
    <div className="todo-create">
      <input value={newTodo} onChange={(e:React.ChangeEvent<HTMLInputElement> ) => setNewTodo(e.target.value)} className="todo-input" type="text" placeholder="Enter Todo..."/>
      <button onClick={handleCreateTodo} className="todo-create-button">Create</button>
    </div>
  )
}

export default TodoCreate
