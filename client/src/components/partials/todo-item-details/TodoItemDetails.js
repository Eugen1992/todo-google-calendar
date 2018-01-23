import React from 'react';
import moment from 'moment';
import './TodoItemDetails.css';

export default function TodoDetails ({ description, dueDate, createdAt, startsAt }) {
  return (<div className="todoDetails-container">
    <div>Description: { description }</div><br />
    <div>Start date: { moment(startsAt).calendar() }</div><br />
    <div>Created at: { moment(createdAt).calendar() }</div>
    <div>Due date: { moment(dueDate).calendar() }</div>
  </div>)
};
