import React from 'react'

const Todo = ({ todo }) => {
  return (
    <div className="todo">
            <div className="content">
              <p>{todo.text}</p>
              <p className="categoria">({todo.category})</p>
            </div>
            <div>
              <button className='complete'>Completar</button>
              <button className='remove'>x</button>
            </div>
          </div>
  )
}

export default Todo