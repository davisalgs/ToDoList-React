import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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

  return <div>Olá React!</div>; 
}

export default App
