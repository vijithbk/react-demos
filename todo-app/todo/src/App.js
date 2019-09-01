import React from 'react';

import Title from './components/Title'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

import './App.css';

window.id = 0;

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  addTodo = (value) => {
    const todo = {text: value, id: ++window.id};
    this.state.data.push(todo);
    this.setState({data: this.state.data});
  }

  handleRemove(id) {
    const remainder = this.state.data.filter((todo) => {
      if(todo.id !== id) return todo;
    });
    this.setState({data: remainder});
  }

  render() {
    return (
      <div className="App">
        <Title title="TODO App"></Title>

        <TodoForm addTodo={this.addTodo} />

        <TodoList todos={this.state.data} remove={this.handleRemove.bind(this)}/>
      </div>
    );
  }
}

export default App;
