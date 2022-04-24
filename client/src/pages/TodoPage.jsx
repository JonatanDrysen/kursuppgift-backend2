import React from 'react'

import TodoList from '../components/TodoList'
import TodoListDone from '../components/TodoListDone'

export default function TodoPage() {
    return (
        <>
            <div className="allTodoList">
                <h1>Your todos</h1>
                <TodoList />
            </div>
            <div className="allDoneTodoList">
                <TodoListDone />
            </div>
        </>
    )
}
