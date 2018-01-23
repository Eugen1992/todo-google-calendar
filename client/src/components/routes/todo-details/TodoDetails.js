import React from 'react';
import Header from '../../partials/header';
import moment from 'moment';
import { Link } from 'react-router-dom';

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
    const { summary, description, createdAt, dueDate, startsAt, id } = this.props;

    return (<div>
      <Header text={summary} />
      <div>Description: { description }</div><br />
      <div>Start date: { moment(startsAt).calendar() }</div><br />
      <div>Created at: { moment(createdAt).calendar() }</div><br />
      <div>Due date: { moment(dueDate).calendar() }</div><br />
      <Link to={`/edit/${id}`} ><button className="button">Edit</button></Link>
    </div>)
  }
};
