import React from 'react';
import EditTodo from '../../components/routes/edit-todo/EditTodo';
import Loader from '../../components/ui/loader';
import { getSingleTodo, editTodo } from '../../utils/todos-data';

export default class EditTodoContainer extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {todo: null, isLoading: false};
    this.editTodo = this.editTodo.bind(this);
  }
  componentDidMount() {
    const { match: { params: { id } } } = this.props;

    this.setState({ isLoading: true });
    getSingleTodo(id)
      .then((todo) => {
        this.setState({ isLoading: false, todo });
      });
  }
  editTodo(todo) {
    const { history, match: { params: { id } } } = this.props;
    editTodo(id, todo)
      .then(() => {
        history.push('/');
      });
  }
  render() {
    const { todo, isLoading } = this.state;

    if (isLoading) return (<Loader />);

    return (<EditTodo {...todo} onSubmit={this.editTodo} />);
  }
}