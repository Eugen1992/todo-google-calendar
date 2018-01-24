import React from 'react';
import Header from '../../partials/header/index';
import Datetime from 'react-datetime';
import moment from 'moment';

export default class EditTodo extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = { ...this.props, dueDate: moment(this.props.dueDate) };

    this.onDescriptionChange = this.onFieldChange.bind(this, 'description');
    this.onStatusChange = this.onFieldChange.bind(this, 'status');
    this.onDueDateChange = this.onDueDateChange.bind(this, 'status');
    this.onSubmit = this.onSubmit.bind(this);
  }
  onFieldChange(fieldName, event) {
    this.setState({ [fieldName]: event.target.value });
  }

  onDueDateChange(dueDate) {
    this.setState({ dueDate });
  }

  onSubmit() {
    const { onSubmit } = this.props;
    const { description, status, dueDate } = this.state;

    onSubmit({ description, status, dueDate });
  }

  render() {
    const { summary, description, status, dueDate } = this.state;
    return (<div>
      <Header text={summary} />
      <div>Description: <input value={description} onChange={this.onDescriptionChange} /></div><br />
      <div>Status: <input type="number" min="0" max="100" value={status} onChange={this.onStatusChange} />%</div><br />
      <div>Due date</div>
      <Datetime open value={dueDate} onChange={this.onDueDateChange} />
      <button className="button" onClick={this.onSubmit}> Update todo</button>
    </div>);
  }
}