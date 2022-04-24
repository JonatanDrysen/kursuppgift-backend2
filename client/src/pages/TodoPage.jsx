import React from 'react'

import TodoList from '../components/TodoList'
import TodoListDone from '../components/TodoListDone'
import NewTodo from '../components/NewTodo'

export default function TodoPage() {
    return (
        <>
            <h1>Todays todos!</h1>
            <div className="newTodo">
                <NewTodo />
            </div>
            <div className="allTodoList">
                <TodoList />
            </div>
            <div className="allDoneTodoList">
                <TodoListDone />
            </div>
        </>
    )
}
