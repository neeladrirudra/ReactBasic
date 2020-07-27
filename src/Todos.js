import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <table className="collection-item" key={todo.id}>
          <tbody>
            <tr>
              <td>{todo.content}</td>
              <td className="right-align">
                <button onClick={() => {deleteTodo(todo.id)}}>Done</button>
              </td>
            </tr>
          </tbody>
        </table>
      )
    })
  ) : (
    <p className="center">You have no Todo's left, Yay</p>
  );

  return(
    <div className="todos collection">
      { todoList }
    </div>
  )
};

export default Todos;