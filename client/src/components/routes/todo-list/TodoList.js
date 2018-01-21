import React from 'react';
import './TodoList.css';
import Header from '../../partials/header';
import TodoItem from '../../partials/todo-item';
import {
  Link
} from 'react-router-dom';

export default function TodoList ({ todos, onRemove }) {
  return (
    <div className="page">
      <Header text="Todos" />
      <Link to="/create" className="redLink">Add todo</Link>
      {
        todos.map((todo, index) => (
          <TodoItem
            key={index}
            {...todo}
            onRemove={() => onRemove(todo.id) }
          />
        ))
      }
    </div>
  );
}