import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {

      id:1,

      text: "criar funcionalidade x no sistema",

      category: "Trabalho",

      isCompleted: false,

    },

    {

      id:2,

      text: "Ir pra academia",

      category: "Pessoal",

      isCompleted: false,

    },

    {

      id:3,

      text: "Estudar React",

      category: "Estudos",

      isCompleted: false,

    }
  ])

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-List">
        {todos.map(todo => (
          <div className="todo">
            <div class = "content">
              <p>{todo.text}</p>
              <p className="categoria">({todo.category})</p>
            </div>
            <div>
              <button>Completar</button>
              <button>x</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App
