import React from 'react';
import './TodoItem.css';
import { Link } from 'react-router-dom';

export default function TodoItem({ description, id, onRemove, startsAt  }) {
  const isChecked = new Date(startsAt).getTime() < new Date().getTime();

  return (
    <div className="container">
      <div>
        <input checked={isChecked} type="checkbox" disabled className={isChecked ? 'toggle isChecked' : 'toggle'} />
        <Link className="description" to={`details/${id}`}>{ description }</Link>
      </div>
      <span className="close" onClick={onRemove} ></span>
    </div>
  )
}