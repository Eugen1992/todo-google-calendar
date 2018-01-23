import React from 'react';
import Header from '../header';

export default class EditTodo extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = { ...this.props };
    this.onDescriptionChange = this.onFieldChange.bind(this, 'description');
    this.onStatusChange = this.onFieldChange.bind(this, 'status');
  }
  onFieldChange(fieldName, event) {
    this.setState({ [fieldName]: event.target.value });
  }
  render() {
    const { summary, description, status } = this.state;
    return (<div>
      <Header text={summary} />
      <div>Description: <input value={description} onChange={this.onDescriptionChange} /></div>
      <div>Status: <input type="number" min="0" max="100" value={status} onChange={this.onStatusChange} />%</div>
      <button className="submit"> Update todo</button>
    </div>);
  }
}