import React from 'react';
import './Header.css';

export default function Header ({ text }) {
  return (<h1 className="header">{text}</h1>);
}