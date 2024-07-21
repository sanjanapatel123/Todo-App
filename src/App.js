import {useState} from 'react'
import TodoForm from './components/TodoForm'
import Todos from './components/Todos'
import "./App.css"
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

const App = () => {
 const[todos,setTodos]= useState([
  {id:1, text:'Learn React', isCompleted:false},
  {id:2, text:'Learn Redux', isCompleted:false},
  {id:3, text:'Learn Node', isCompleted:true},
 ])
 const addTodo = (todo) => {
  setTodos(prev => [...prev,todo])
 }
const completedTask = (id)=>{
//   console.log("completed")
//  const newTodos = [];
//  for(let todo of todos){
//   if(todo.id === id){
//     newTodos.push({...todo,isCompleted:!todo.isCompleted})
//   }
//   else{
//     newTodos.push(todo)
//   }
//  }
setTodos((prev)=>{
  return prev.map((todo)=>{
    if(todo.id === id){
      return {...todo,isCompleted:!todo.isCompleted}
    }
    else{
      return todo
    }
  })
})
}
const removetodo = (id)=>{
  setTodos(prev => prev.filter (todo=>todo.id!==id))
}
  return (
    <div className='container'>
      <ToastContainer></ToastContainer>
      <h1 className='title'>Todo List</h1>
      <TodoForm addTodo={addTodo}></TodoForm>
      <Todos todos={todos} completedTask={completedTask} removetodo={removetodo}></Todos>
    </div>
  )
}

export default App
