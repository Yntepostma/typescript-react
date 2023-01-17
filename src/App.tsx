import React from 'react';
import TodoList from './components/TodoList';
import NewtoDo from './components/NewTodo';
import { useState } from 'react';

interface ToDo {
  id:string;
  text:string
}

const App: React.FC = () => {

  const [todo, setTodo] = useState<ToDo[]>([])

  const addTodo = (text:string) =>  {
  setTodo([...todo, {id:Math.random().toString(), text: text}])
  }

  const deleteToDo = (id: string) => {
    console.log("id", id)
    setTodo(todo.filter(todo => todo.id !== id))}
  

  console.log(todo)
  return (
    <div className="App">
     
    
        <NewtoDo add={addTodo} />
         <TodoList items={todo} delete={deleteToDo}/>
       
        </div>
  )
     
}

export default App;
