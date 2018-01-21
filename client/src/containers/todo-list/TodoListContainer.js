import React from 'react';
import { fetchTodos, removeTodo } from '../../utils/todos-data';
import TodoList from '../../components/routes/todo-list';

export default class TodoListContainer extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = { todos: [] };
    this.removeToDo = this.removeToDo.bind(this);
  }
  componentDidMount() {
    fetchTodos().then((todos) => {
      this.setState({ todos });
    });
  }

  removeToDo(id) {
    removeTodo(id).then((todos) => {
      this.setState({ todos });
    });
  }
  render() {
    const { todos } = this.state;
    return (<TodoList
      onRemove={this.removeToDo}
      todos={todos}
    />);
  }
};
