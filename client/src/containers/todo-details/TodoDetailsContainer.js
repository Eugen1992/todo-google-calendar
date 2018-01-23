import React from 'react';
import TodoDetails from '../../components/routes/todo-details/TodoDetails';
import Loader from '../../components/ui/loader';
import { getSingleTodo } from '../../utils/todos-data.js';

export default class TodoDetailsContainer extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = { todo: null, isLoading: false };
  }
  componentDidMount() {
    const { match: { params: { id } } } = this.props;

    this.setState({ isLoading: true });
    getSingleTodo(id)
      .then((todo) => {
        this.setState({ isLoading: false, todo });
      });
  }
  render() {
    const { todo, isLoading } = this.state;

    if (isLoading) return (<Loader />);
    return (
      <TodoDetails {...todo} />
    );
  }
}