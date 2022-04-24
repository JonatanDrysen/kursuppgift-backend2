import { useState, useEffect } from 'react'

const API_URL = "http://localhost:3001/todos/done"

function TodoListDone() {
  const [ doneTodos, setDoneTodos ] = useState([])
  //console.log("DONETODOS", doneTodos)

  useEffect(() => {
    getDoneTodos()
  }, [])

  const getDoneTodos = () => {
    const token = localStorage.getItem("todotodo")
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }

    fetch(API_URL, {
      headers: headers
    })
    .then((res => res.json()))
    .then(data => {
      setDoneTodos(data.doneTodoList)
    })
  }

  return (
    <div className='App'>
      <h2>Completed tasks</h2>

      <div className="todos">
          {doneTodos.filter((item) => item.complete).map(todo => (
            <div className="todo" key={ todo._id }>
              <div className="todoText">{ todo.text }</div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default TodoListDone