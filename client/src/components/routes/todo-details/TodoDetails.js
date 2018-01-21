import React from 'react';
import Loader from '../../ui/loader';
import Header from '../../partials/header';
import moment from 'moment';

export default function TodoDetails ({ isLoading, summary, description, createdAt, startsAt }) {
  if (isLoading) return (<Loader />);
  return (<div>
    <Header text={summary} />
    <div>Description: { description }</div><br />
    <div>Start date: { moment(startsAt).calendar() }</div><br />
    <div>Created at: { moment(createdAt).calendar() }</div>
  </div>)
};
