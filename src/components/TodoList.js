import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      title: 'Todo one',
      isDone: false,
      id: Math.floor(Math.random() * 1000),
    },
  ]);
  const [input, setInput] = useState(' ');
  const [showCompleted, setShowCompleted] = useState(false);

  const addTodo = (e) => {
    const newTodos = [
      ...todos,
      {
        title: input,
        isDone: false,
        id: Math.floor(Math.random() * 1000),
      },
    ];

    setTodos(newTodos);
    setInput('');
  };
  const onCheckTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone = true;
      }
      console.log(todo);

      return todo;
    });
    console.log(newTodos);
    setTodos(newTodos);
  };
  return (
    <div className='ui raised very padded text container segment'>
      <center>
        <h1 className='ui block header' style={{ marginBottom: '30px' }}>
          TodoList
        </h1>
      </center>
      <div className='ui fluid action input'>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className='ui blue button'
          type='Submit'
          onClick={(e) => addTodo(e)}
          style={{ marginRight: '10px' }}
        >
          Add
        </button>
        <button
          className='ui green button'
          type='Submit'
          onClick={() => setShowCompleted(!showCompleted)}
        >
          Show Completed
        </button>
      </div>

      <div>
        {todos
          .filter((todo) => {
            //debugger;
            if (showCompleted) {
              return todo.isDone;
            }
            return !todo.isDone;
          })
          .map((todo) => (
            <div
              className='ui raised segment'
              style={{ marginTop: '10px', padding: '8px' }}
              key={todo.id}
            >
              <div className='ui relaxed divided list'>
                <div className='item'>
                  <div className='content'>
                    <div className='ui checkbox'>
                      <input
                        type='checkbox'
                        checked={todo.isDone}
                        onChange={() => onCheckTodo(todo.id)}
                      />
                      <label>{todo.title}</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TodoList;
