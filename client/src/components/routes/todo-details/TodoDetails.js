import React from 'react';
import Loader from '../../ui/loader';
import Header from '../../partials/header';
import moment from 'moment';
import EditTodo from '../../partials/edit-todo';

export default class TodoDetails extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = { isEditMode: false };
    this.editTodo = this.editTodo.bind(this);
  }
  editTodo() {
    this.setState({ isEditMode: true });
  }
  render() {
    const { isLoading, summary, description, createdAt, dueDate, startsAt } = this.props;
    const { isEditMode } = this.state;
    if (isLoading) return (<Loader />);
    if (isEditMode && !isLoading) return (<EditTodo {...this.props} />);
    return (<div>
      <Header text={summary} />
      <div>Description: { description }</div><br />
      <div>Start date: { moment(startsAt).calendar() }</div><br />
      <div>Created at: { moment(createdAt).calendar() }</div><br />
      <div>Due date: { moment(dueDate).calendar() }</div><br />
      <button className="button">Edit</button>
    </div>)
  }
};
