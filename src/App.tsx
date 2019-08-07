import React, { Fragment, useState } from 'react';
import './App.css';

type EventElement = React.FormEvent<HTMLFormElement>

interface ITodo {
  text: string;
  completed: boolean;
}
const App: React.FC = () => {
  const [value, setvalue] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = (e: EventElement): void => {
    e.preventDefault();
    addTodo(value)
    setvalue('')
  }

  const addTodo = (text: string): void => {
    setTodos([...todos, { text, completed: false }]);
  }
  return (
    <Fragment>
      <h1>TODO List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={e => setvalue(e.target.value)} required />
        <button type="submit">Add TODO</button>
      </form>
      <ul>
        {
          todos.map((todo: ITodo) => <li key={todo.text}>{todo.text}</li>)
        }
      </ul>
    </Fragment>
  );
}

export default App;
