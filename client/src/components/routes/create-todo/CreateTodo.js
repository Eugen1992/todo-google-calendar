import React from 'react';
import Datetime from 'react-datetime';
import moment from 'moment';

import Loader from '../../ui/loader';
import './CreateTodo.css';
import '../../../common-styles/base.css';
import '../../../common-styles/react-datetime.css';

export default class AddTodo extends React.Component  {
  constructor(...args) {
    super(...args);
    this.state = {
      summary: '',
      description: '',
      startDate: moment(),
      dueDate: moment(),
      loading: false,
    };

    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onSummaryChange = this.onSummaryChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onDueDateChange = this.onDueDateChange.bind(this);
    this.onSubmit= this.onSubmit.bind(this);
  }
  onSubmit() {
    const { onSubmit } = this.props;
    const { description, summary, startDate, dueDate } = this.state;
    const trimmedDescription = description.trim();

    if (trimmedDescription) {
      onSubmit({ description: trimmedDescription, summary, startDate: startDate.format(), dueDate });
      this.setState({description: '', summary: '', startDate: moment(), isLoading: true });
    }
  }

  onSummaryChange(event) {
    this.setState({ summary: event.target.value });
  }

  onDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }

  onDueDateChange(dueDate) {
    this.setState({ dueDate });
  }

  onDateChange(startDate) {
    this.setState({ startDate });
  }

  render() {
    const { description, startDate, dueDate, summary, isLoading } = this.state;
    return (
      <div>
        { isLoading && <Loader />}
        <input
          value={summary}
          onChange={this.onSummaryChange}
          className="input" placeholder="Name"
        />
        <input
          value={description}
          onChange={this.onDescriptionChange}
          className="input" placeholder="Description"
        />
        <div className="label">Start date:</div>
        <Datetime open value={startDate} onChange={this.onDateChange} />
        <div className="label">Due date:</div>
        <Datetime open value={dueDate} onChange={this.onDueDateChange} />
        <div className="button" onClick={this.onSubmit} > Create </div>
      </div>
    )
  }
};