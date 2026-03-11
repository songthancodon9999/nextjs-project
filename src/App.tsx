// import './App.css'
import { useState } from 'react';
import InputToDo from './test/my.component';
import TodoList from './test/TodoList';

function App() {
  const [todoList, setTodoList] = useState<string[]>(["Learn React", "Learn TypeScript", "Build a project"]);

  return (
    <>
      <InputToDo 
        name="ahihi"
        age={30}
        todoList={todoList}
        setTodoList={setTodoList} 
      />

      <TodoList
        todoList={todoList}
      />
    </>
  )
}

export default App
