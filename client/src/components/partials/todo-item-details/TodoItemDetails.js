import React from 'react';
import moment from 'moment';
import './TodoItemDetails.css';

export default function TodoDetails ({ description, dueDate, createdAt, startsAt }) {
  return (<div className="todoDetails-container">
    <div>Description: { description }</div><br />
    <div>Created at: { moment(createdAt).calendar() }</div><br />
  </div>)
};
