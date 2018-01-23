import React from 'react';
import CreateTodo from '../../components/routes/create-todo';
import { createTodo } from '../../utils/todos-data.js';

export default class TodoListContainer extends React.Component {
  constructor(...args) {
    super(...args);

    this.addTodo = this.addTodo.bind(this);
  }
  addTodo(todo) {
    const { history } = this.props;
    createTodo(todo)
      .then(() => {
        history.push('/');
      });
  }

  render() {
    return (
      <CreateTodo onSubmit={this.addTodo} />
    );
  }
};
