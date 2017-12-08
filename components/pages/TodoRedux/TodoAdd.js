/*
PRESENTATION COMPONENT
*/
import React from 'react'

export default class TodoPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      text: ''
    }
  }
  handleTodoText (event) {
    this.setState({text: event.target.value});
  }
  handleAdd () {
    if (this.state.text === '') {
      return alert('Please enter text');
    }
    this.props.handleAdd(this.state.text);
    this.setState({text: ''});
  }
  render() {
    return (
      <div>
        <input type='text' value={this.state.text} onChange={this.handleTodoText.bind(this)}/>
        <button onClick={this.handleAdd.bind(this)}>ADD</button>
      </div>
    )
  }
}
