import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'go to market' },
      { id: 2, content: 'close the pump' },
    ]
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => todo.id !== id);

    this.setState({
      todos,
    })
  };

  addTodo = (todo) => {
    let todos = [...this.state.todos, todo];
    this.setState({
      todos,
    })
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="centre blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo todos={this.state.todos} addTodo={this.addTodo}/>
      </div>
    )
  }
}

export default App;
