import { useState, useEffect } from 'react'

const API_URL = "http://localhost:3001/todos/done"

const token = localStorage.getItem("todotodo")

const headers = {
	"Content-Type": "application/json",
	"Authorization": `Bearer ${token}`
}

function TodoListDone() {
	const [ doneTodos, setDoneTodos ] = useState([])
	//console.log("DONETODOS", doneTodos)

	useEffect(() => {
		getDoneTodos()
	}, [])

	const getDoneTodos = () => {
		fetch(API_URL, {
			headers: headers
		})
		.then((res => res.json()))
		.then(data => {
			setDoneTodos(data.doneTodoList)
		})
	}

	const undoTodo = async (_id) => {
		const data = await fetch(`${API_URL}/${_id}`, {
			method: "PUT",
			headers: headers
		})
		.then(res => res.json())
		console.log("DONEDATA: ", data)

		setDoneTodos(todos => todos.map(todo => {
			if (todo._id === data._id) {
				todo.complete = !data.complete
			}
			return todo
		}))
		getDoneTodos()
	}

	return (
		<div className='App'>
			<h2>Completed tasks</h2>

			<div className="todos">
				{doneTodos.filter((item) => item.complete).map(todo => (
					<div className="todo" key={ todo._id }>
						<div className="todoText">{ todo.text }</div>
						<button type="button" onClick={() => undoTodo(todo._id)}>Undo todo</button>
					</div>
				))}
			</div>
		</div>
	)
}

export default TodoListDone